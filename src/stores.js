import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, erat dictum accumsan rutrum, dolor ligula sodales lorem, vel volutpat diam velit laoreet justo.'
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, erat dictum accumsan rutrum, dolor ligula sodales lorem, vel volutpat diam velit laoreet justo.'
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, erat dictum accumsan rutrum, dolor ligula sodales lorem, vel volutpat diam velit laoreet justo.'
    },
])