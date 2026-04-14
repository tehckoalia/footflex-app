// Exercise data for foot problems
const exercises = [
    {
        id: 1,
        name: "Toe Curls",
        category: "strengthening",
        icon: "footprints",
        duration: 30,
        difficulty: "Beginner",
        description: "Strengthen the muscles in your toes and feet by curling them tightly.",
        instructions: [
            "Sit comfortably with your feet flat on the floor",
            "Curl your toes downward as if trying to grip something",
            "Hold for 3-5 seconds",
            "Release and repeat",
            "Do 10-15 repetitions"
        ],
        benefits: ["Strengthens toe muscles", "Improves grip", "Helps with balance"],
        targetAreas: ["Toes", "Arch"]
    },
    {
        id: 2,
        name: "Ankle Circles",
        category: "mobility",
        icon: "refresh-cw",
        duration: 60,
        difficulty: "Beginner",
        description: "Improve ankle flexibility and reduce stiffness with gentle circular movements.",
        instructions: [
            "Sit or lie down comfortably",
            "Lift one foot off the ground",
            "Slowly rotate your ankle in a circular motion",
            "Do 10 circles in one direction",
            "Reverse direction and do 10 more circles",
            "Repeat with the other foot"
        ],
        benefits: ["Increases ankle mobility", "Reduces stiffness", "Improves circulation"],
        targetAreas: ["Ankles", "Calves"]
    },
    {
        id: 3,
        name: "Arch Lifts",
        category: "strengthening",
        icon: "mountain",
        duration: 45,
        difficulty: "Intermediate",
        description: "Strengthen your foot arch muscles to improve support and reduce pain.",
        instructions: [
            "Stand barefoot with feet hip-width apart",
            "Press your toes into the ground while lifting your arch",
            "Hold for 3-5 seconds",
            "Release and return to flat position",
            "Do 10-15 repetitions"
        ],
        benefits: ["Strengthens arch muscles", "Improves foot support", "Reduces arch pain"],
        targetAreas: ["Arch", "Foot muscles"]
    },
    {
        id: 4,
        name: "Towel Stretch",
        category: "stretching",
        icon: "stretch-horizontal",
        duration: 60,
        difficulty: "Beginner",
        description: "Gentle stretch for your calves and feet using a towel.",
        instructions: [
            "Sit on the floor with legs extended",
            "Loop a towel around the ball of your foot",
            "Gently pull the towel toward you",
            "Hold for 15-30 seconds",
            "Release and repeat 3-5 times",
            "Do both feet"
        ],
        benefits: ["Stretches calves", "Relieves foot tension", "Improves flexibility"],
        targetAreas: ["Calves", "Feet", "Ankles"]
    },
    {
        id: 5,
        name: "Marble Pickups",
        category: "strengthening",
        icon: "circle-dot",
        duration: 90,
        difficulty: "Intermediate",
        description: "Improve toe dexterity and strength by picking up marbles with your toes.",
        instructions: [
            "Place 10-20 marbles on the floor",
            "Sit in a chair with feet flat",
            "Use your toes to pick up one marble at a time",
            "Place marbles in a cup or bowl",
            "Repeat until all marbles are moved",
            "Do with both feet"
        ],
        benefits: ["Strengthens toes", "Improves coordination", "Enhances dexterity"],
        targetAreas: ["Toes", "Foot muscles"]
    },
    {
        id: 6,
        name: "Heel Raises",
        category: "strengthening",
        icon: "arrow-up",
        duration: 60,
        difficulty: "Beginner",
        description: "Strengthen your calf muscles and improve ankle stability.",
        instructions: [
            "Stand with feet hip-width apart",
            "Slowly rise onto your toes",
            "Hold for 2-3 seconds at the top",
            "Slowly lower back down",
            "Do 10-15 repetitions",
            "Hold onto a chair for balance if needed"
        ],
        benefits: ["Strengthens calves", "Improves balance", "Stabilizes ankles"],
        targetAreas: ["Calves", "Ankles", "Feet"]
    },
    {
        id: 7,
        name: "Plantar Fascia Stretch",
        category: "stretching",
        icon: "hand",
        duration: 45,
        difficulty: "Beginner",
        description: "Target the plantar fascia to relieve heel pain and improve flexibility.",
        instructions: [
            "Sit with one leg crossed over the other",
            "Grab your toes and pull them back toward your shin",
            "You should feel a stretch in your arch",
            "Hold for 15-30 seconds",
            "Release and repeat 3-5 times",
            "Do both feet"
        ],
        benefits: ["Relieves heel pain", "Stretches plantar fascia", "Improves arch flexibility"],
        targetAreas: ["Arch", "Heel", "Plantar fascia"]
    },
    {
        id: 8,
        name: "Foot Roll",
        category: "relaxation",
        icon: "circle",
        duration: 60,
        difficulty: "Beginner",
        description: "Roll your foot over a ball to massage and relax tense muscles.",
        instructions: [
            "Sit in a chair with a tennis ball on the floor",
            "Place your foot on the ball",
            "Roll the ball under your foot from heel to toe",
            "Apply gentle pressure as needed",
            "Continue for 1-2 minutes",
            "Repeat with the other foot"
        ],
        benefits: ["Relaxes foot muscles", "Improves circulation", "Reduces tension"],
        targetAreas: ["Entire foot"]
    },
    {
        id: 9,
        name: "Toe Spreads",
        category: "mobility",
        icon: "git-branch",
        duration: 30,
        difficulty: "Beginner",
        description: "Improve toe flexibility and strengthen the muscles between your toes.",
        instructions: [
            "Sit or stand comfortably",
            "Lift your toes and spread them as far apart as possible",
            "Hold for 3-5 seconds",
            "Relax and repeat",
            "Do 10-15 repetitions"
        ],
        benefits: ["Increases toe mobility", "Strengthens foot muscles", "Improves balance"],
        targetAreas: ["Toes", "Foot muscles"]
    },
    {
        id: 10,
        name: "Achilles Stretch",
        category: "stretching",
        icon: "stretch-vertical",
        duration: 60,
        difficulty: "Beginner",
        description: "Stretch your Achilles tendon to improve flexibility and reduce injury risk.",
        instructions: [
            "Stand facing a wall with one foot forward",
            "Place your hands on the wall at shoulder height",
            "Keep your back knee straight and heel on the ground",
            "Lean forward until you feel a stretch",
            "Hold for 15-30 seconds",
            "Switch legs and repeat"
        ],
        benefits: ["Stretches Achilles tendon", "Improves ankle flexibility", "Reduces injury risk"],
        targetAreas: ["Achilles tendon", "Calves", "Ankles"]
    },
    {
        id: 11,
        name: "Big Toe Stretch",
        category: "mobility",
        icon: "move",
        duration: 30,
        difficulty: "Beginner",
        description: "Maintain flexibility in your big toe for better walking and balance.",
        instructions: [
            "Sit with one leg crossed over the other",
            "Hold your big toe with your hand",
            "Gently pull it back toward your shin",
            "Hold for 10-15 seconds",
            "Release and repeat 5-10 times",
            "Do both feet"
        ],
        benefits: ["Improves big toe mobility", "Helps with walking", "Maintains balance"],
        targetAreas: ["Big toe", "Foot joints"]
    },
    {
        id: 12,
        name: "Foot Massage",
        category: "relaxation",
        icon: "heart",
        duration: 120,
        difficulty: "Beginner",
        description: "Self-massage technique to relax tired feet and improve circulation.",
        instructions: [
            "Sit comfortably and hold one foot",
            "Use your thumbs to apply pressure to the sole",
            "Work from heel to toe in circular motions",
            "Pay attention to sore or tight areas",
            "Massage for 2-3 minutes",
            "Repeat with the other foot"
        ],
        benefits: ["Relaxes muscles", "Improves circulation", "Reduces stress"],
        targetAreas: ["Entire foot"]
    }
];

// Categories
const categories = [
    {
        id: "stretching",
        name: "Stretching",
        icon: "stretch-horizontal",
        description: "Improve flexibility and reduce muscle tension"
    },
    {
        id: "strengthening",
        name: "Strengthening",
        icon: "dumbbell",
        description: "Build foot and ankle strength for better support"
    },
    {
        id: "mobility",
        name: "Mobility",
        icon: "move",
        description: "Enhance range of motion and joint flexibility"
    },
    {
        id: "relaxation",
        name: "Relaxation",
        icon: "sparkles",
        description: "Soothe tired feet and promote recovery"
    }
];

// Workout presets
const workouts = {
    quick: {
        name: "Quick Relief",
        exercises: [1, 8, 9]
    },
    morning: {
        name: "Morning Stretch",
        exercises: [2, 4, 7, 10, 11]
    },
    evening: {
        name: "Evening Relax",
        exercises: [8, 12, 4, 7, 5, 1]
    },
    custom: {
        name: "Custom Workout",
        exercises: []
    }
};
