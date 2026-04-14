// Exercise data for hallux valgus (bunion) treatment
const exercises = [
    {
        id: 1,
        name: "Toe Spreads",
        category: "strengthening",
        icon: "git-branch",
        duration: 30,
        difficulty: "Beginner",
        description: "Essential exercise for hallux valgus - strengthens muscles between toes and helps realign the big toe.",
        instructions: [
            "Sit or stand comfortably",
            "Lift your toes and spread them as far apart as possible",
            "Focus on separating the big toe from the second toe",
            "Hold for 3-5 seconds",
            "Relax and repeat",
            "Do 10-15 repetitions"
        ],
        benefits: ["Strengthens toe abductor muscles", "Helps realign big toe", "Reduces bunion progression", "Improves toe spacing"],
        targetAreas: ["Toes", "Big toe", "Foot muscles"]
    },
    {
        id: 2,
        name: "Big Toe Stretch",
        category: "mobility",
        icon: "move",
        duration: 45,
        difficulty: "Beginner",
        description: "Critical for hallux valgus - improves big toe flexibility and reduces stiffness at the bunion joint.",
        instructions: [
            "Sit with one leg crossed over the other",
            "Hold your big toe with your hand",
            "Gently pull it back toward your shin",
            "Hold for 15-20 seconds",
            "Release and repeat 5-10 times",
            "Do both feet"
        ],
        benefits: ["Improves big toe mobility", "Reduces bunion stiffness", "Helps with walking", "Maintains joint flexibility"],
        targetAreas: ["Big toe", "Bunion joint", "Foot joints"]
    },
    {
        id: 3,
        name: "Arch Lifts",
        category: "strengthening",
        icon: "mountain",
        duration: 45,
        difficulty: "Intermediate",
        description: "Strengthen foot arch muscles to provide better support and reduce pressure on the bunion.",
        instructions: [
            "Stand barefoot with feet hip-width apart",
            "Press your toes into the ground while lifting your arch",
            "Focus on engaging the intrinsic foot muscles",
            "Hold for 3-5 seconds",
            "Release and return to flat position",
            "Do 10-15 repetitions"
        ],
        benefits: ["Strengthens arch muscles", "Reduces pressure on bunion", "Improves foot support", "Stabilizes big toe"],
        targetAreas: ["Arch", "Foot muscles", "Big toe"]
    },
    {
        id: 4,
        name: "Towel Scrunches",
        category: "strengthening",
        icon: "stretch-horizontal",
        duration: 60,
        difficulty: "Beginner",
        description: "Strengthen toe muscles and improve grip - excellent for hallux valgus patients.",
        instructions: [
            "Place a small towel on the floor",
            "Sit in a chair with feet flat on the towel",
            "Use your toes to scrunch the towel toward you",
            "Focus on using all toes, especially the big toe",
            "Repeat 10-15 times",
            "Do with both feet"
        ],
        benefits: ["Strengthens toe flexors", "Improves big toe function", "Enhances foot strength", "Supports bunion recovery"],
        targetAreas: ["Toes", "Big toe", "Arch"]
    },
    {
        id: 5,
        name: "Marble Pickups",
        category: "strengthening",
        icon: "circle-dot",
        duration: 90,
        difficulty: "Intermediate",
        description: "Advanced toe strengthening exercise - improves dexterity and helps separate toes.",
        instructions: [
            "Place 10-20 marbles on the floor",
            "Sit in a chair with feet flat",
            "Use your toes to pick up one marble at a time",
            "Focus on using each toe independently",
            "Place marbles in a cup or bowl",
            "Repeat until all marbles are moved",
            "Do with both feet"
        ],
        benefits: ["Strengthens individual toe muscles", "Improves toe coordination", "Helps separate toes", "Reduces bunion pain"],
        targetAreas: ["Toes", "Big toe", "Foot muscles"]
    },
    {
        id: 6,
        name: "Heel Raises",
        category: "strengthening",
        icon: "arrow-up",
        duration: 60,
        difficulty: "Beginner",
        description: "Strengthen calf muscles and improve overall foot stability for hallux valgus patients.",
        instructions: [
            "Stand with feet hip-width apart",
            "Slowly rise onto your toes",
            "Focus on pushing through the big toe",
            "Hold for 2-3 seconds at the top",
            "Slowly lower back down",
            "Do 10-15 repetitions",
            "Hold onto a chair for balance if needed"
        ],
        benefits: ["Strengthens calves", "Improves big toe push-off", "Stabilizes ankles", "Supports foot alignment"],
        targetAreas: ["Calves", "Ankles", "Big toe", "Feet"]
    },
    {
        id: 7,
        name: "Plantar Fascia Stretch",
        category: "stretching",
        icon: "hand",
        duration: 45,
        difficulty: "Beginner",
        description: "Stretch the plantar fascia to relieve tension that can worsen hallux valgus.",
        instructions: [
            "Sit with one leg crossed over the other",
            "Grab your toes and pull them back toward your shin",
            "You should feel a stretch in your arch",
            "Hold for 15-30 seconds",
            "Release and repeat 3-5 times",
            "Do both feet"
        ],
        benefits: ["Relieves foot tension", "Stretches plantar fascia", "Improves arch flexibility", "Reduces bunion pressure"],
        targetAreas: ["Arch", "Heel", "Plantar fascia", "Big toe"]
    },
    {
        id: 8,
        name: "Foot Roll",
        category: "relaxation",
        icon: "circle",
        duration: 60,
        difficulty: "Beginner",
        description: "Roll your foot over a ball to massage the bunion area and relieve pain.",
        instructions: [
            "Sit in a chair with a tennis ball on the floor",
            "Place your foot on the ball",
            "Roll the ball under your foot from heel to toe",
            "Apply gentle pressure near the big toe joint",
            "Continue for 1-2 minutes",
            "Repeat with the other foot"
        ],
        benefits: ["Relieves bunion pain", "Massages foot muscles", "Improves circulation", "Reduces inflammation"],
        targetAreas: ["Entire foot", "Bunion area", "Big toe"]
    },
    {
        id: 9,
        name: "Toe Separators",
        category: "mobility",
        icon: "git-branch",
        duration: 30,
        difficulty: "Beginner",
        description: "Use toe separators or your fingers to gently space toes and improve alignment.",
        instructions: [
            "Sit comfortably",
            "Place toe separators between your toes",
            "Or use your fingers to gently separate toes",
            "Focus on the space between big and second toe",
            "Hold for 30-60 seconds",
            "Remove and repeat several times",
            "Do daily for best results"
        ],
        benefits: ["Improves toe alignment", "Reduces bunion pressure", "Stretches toe muscles", "Prevents toe crowding"],
        targetAreas: ["Toes", "Big toe", "Toe webbing"]
    },
    {
        id: 10,
        name: "Achilles Stretch",
        category: "stretching",
        icon: "stretch-vertical",
        duration: 60,
        difficulty: "Beginner",
        description: "Stretch your Achilles tendon to improve foot mechanics for hallux valgus.",
        instructions: [
            "Stand facing a wall with one foot forward",
            "Place your hands on the wall at shoulder height",
            "Keep your back knee straight and heel on the ground",
            "Lean forward until you feel a stretch",
            "Hold for 15-30 seconds",
            "Switch legs and repeat"
        ],
        benefits: ["Improves foot mechanics", "Reduces strain on big toe", "Enhances ankle flexibility", "Supports proper gait"],
        targetAreas: ["Achilles tendon", "Calves", "Ankles", "Big toe"]
    },
    {
        id: 11,
        name: "Short Foot Exercise",
        category: "strengthening",
        icon: "footprints",
        duration: 45,
        difficulty: "Intermediate",
        description: "Activate intrinsic foot muscles to provide better support for hallux valgus.",
        instructions: [
            "Sit or stand barefoot",
            "Lift your arch without curling your toes",
            "Imagine trying to shorten your foot",
            "Keep your toes flat on the ground",
            "Hold for 5-10 seconds",
            "Release and repeat 10-15 times"
        ],
        benefits: ["Activates intrinsic muscles", "Strengthens foot arch", "Improves big toe stability", "Reduces bunion stress"],
        targetAreas: ["Arch", "Intrinsic foot muscles", "Big toe"]
    },
    {
        id: 12,
        name: "Bunion Massage",
        category: "relaxation",
        icon: "heart",
        duration: 120,
        difficulty: "Beginner",
        description: "Gentle massage around the bunion to relieve pain and improve circulation.",
        instructions: [
            "Sit comfortably and hold one foot",
            "Use your thumbs to gently massage the bunion area",
            "Apply circular motions around the big toe joint",
            "Work the area between the big and second toe",
            "Massage for 2-3 minutes",
            "Repeat with the other foot"
        ],
        benefits: ["Relieves bunion pain", "Reduces inflammation", "Improves circulation", "Relaxes tight muscles"],
        targetAreas: ["Bunion area", "Big toe joint", "Toe webbing"]
    }
];

// Categories for hallux valgus treatment
const categories = [
    {
        id: "stretching",
        name: "Stretching",
        icon: "stretch-horizontal",
        description: "Improve flexibility and reduce bunion stiffness"
    },
    {
        id: "strengthening",
        name: "Strengthening",
        icon: "dumbbell",
        description: "Build foot muscles to support big toe alignment"
    },
    {
        id: "mobility",
        name: "Mobility",
        icon: "move",
        description: "Enhance big toe range of motion and flexibility"
    },
    {
        id: "relaxation",
        name: "Relaxation",
        icon: "sparkles",
        description: "Relieve bunion pain and promote recovery"
    }
];

// Workout presets for hallux valgus
const workouts = {
    quick: {
        name: "Bunion Relief",
        exercises: [1, 2, 8]
    },
    morning: {
        name: "Morning Bunion Care",
        exercises: [2, 4, 1, 3, 6]
    },
    evening: {
        name: "Evening Bunion Relief",
        exercises: [8, 12, 7, 9, 5, 1]
    },
    custom: {
        name: "Custom Workout",
        exercises: []
    }
};
