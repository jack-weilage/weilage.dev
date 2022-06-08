export default function forward_events(node: HTMLElement, events: string[])
{
    // Create utility functions for use later
    const create_listeners = (events: string[]) => events
        .map(event_name => ({ [event_name]: (event: Event) => node.dispatchEvent(new CustomEvent(event_name, event))}))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    
    const change_listeners = (type: 'add' | 'remove', listeners: Record<string, (ev: Event) => boolean>) => Object.entries(listeners)
        .forEach(([event, listener]) => node[`${type}EventListener`](event, listener))
    // Create an array of event listeners for each event name.
    let listeners = create_listeners(events)

    // Add the event listeners to the node.
    change_listeners('add', listeners)

    return {
        update(new_events: string[]) {
            const old_events = Object.keys(listeners)

            // Find the old listeners that are no longer needed.
            const to_remove = old_events
                .filter(event => !new_events.includes(event))
                .reduce((acc, curr) => ({ ...acc, [curr]: listeners[curr] }), {})
            // Create the new listeners.
            const to_add = create_listeners(new_events.filter(event => !old_events.includes(event)))

            // Remove/Add the event listeners to the node.
            change_listeners('remove', to_remove)
            change_listeners('add', to_add)

            // TODO: Surely there's a less verbose way to do this. All that needs to be done is to remove the old listeners and add the new ones.
            listeners = { ...listeners, ...to_add }

            // Remove the old listeners from the object.
            for (const event of Object.keys(to_remove))
            {
                delete listeners[event]
            }
        },
        destroy() {
            // Remove the event listeners from the node.
            change_listeners('remove', listeners)
        }
    }
}