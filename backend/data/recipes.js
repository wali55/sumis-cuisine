const recipes = [
    {
        _id: "1",
        title: "Crispy Potato Wedges",
        image: "/images/image1.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/AZS_Y1Q_Ehk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
    {
        _id: "2",
        title: "Pancake Recipe in Bangla",
        image: "/images/image2.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/Z6NwRwI3S2s",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
    {
        _id: "3",
        title: "Plain Cake Recipe in Bangla",
        image: "/images/image3.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/K43se9dmf1M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
    {
        _id: "4",
        title: "Beef Curry Recipe in Bangla",
        image: "/images/image4.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/ENTYGGskWLI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
    {
        _id: "5",
        title: "Baby Sweets Recipe",
        image: "/images/image5.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/tCsD5PiMRXI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
    {
        _id: "6",
        title: "Samosa Recipe in Bangla",
        image: "/images/image6.png",
        ingredients: ["Potato", "Oil", "Flour", "Salt"],
        video: "https://www.youtube.com/embed/0UjA-59p-w0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet libero justo. Quisque vestibulum erat sit amet justo sodales, ut laoreet libero dapibus. Quisque eget dolor erat. Phasellus non quam nec enim bibendum dictum. Nulla consectetur ante vel bibendum ullamcorper. Phasellus nibh mauris, commodo ut mi eget, fringilla tincidunt nunc. Etiam ipsum dolor, consequat vel sodales id, tristique eget purus. Morbi est felis, accumsan nec ipsum at, pharetra posuere lorem. Suspendisse fermentum dapibus leo id mollis. Aliquam vulputate placerat lectus, quis pharetra mi. Etiam lacinia erat vel neque maximus rutrum. Donec dictum enim vel massa vulputate scelerisque. Suspendisse tincidunt ipsum at maximus varius. Ut viverra sagittis ligula ut malesuada. Donec pretium nunc eu purus rhoncus, convallis accumsan risus elementum. Duis ultricies sagittis enim non molestie. Donec pellentesque risus ex, eu congue lorem euismod vitae. Nulla a est eget ante molestie luctus egestas ac elit. Mauris vehicula vel orci porta venenatis. Aenean porta tristique faucibus. Nunc ultrices id tellus nec condimentum. Ut rutrum ligula non nulla volutpat, sed placerat erat vestibulum.",
    },
];

export default recipes;