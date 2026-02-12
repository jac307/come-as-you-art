
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
        const showDialog = ref(false)
        const showIntroDialog = ref(true)
        const selectedProject = ref({}); // Holds the clicked project's data
        const projects = [
            // 1
            {
                title: "Nesting",
                author: "Mara Sanders",
                description: `Watercolour on paper, fabric, thread, graphite on paper / 13" x 2" x 10" 
                            ——— To reflect on the idea of a 'time based' narrative, 
                            I wanted to look  at my own artistic practice and use of media. Knitting, sewing, and watercolour 
                            paintings are what began my art practice early in my childhood, and have been constant materials 
                            I have reached for in the years since. By integrating these mediums, I wanted to illustrate how I am 
                            made up of these artistic expressions, and how I have built a protective space in art for myself.`,
                thumbnail: "imgs/01.png"
            },

            // 2

            {
                title: "Withered",
                author: "Bronte Mayot",
                description: `Multimedia work containing dried-up rose metals, digital illustrations on watercolour paper / 8.5 x 11 
                            ——— This work is inspired by the concepts of decay and death, through the imagery of flowers as 
                            storytellers to symbolize the passage of time.`,
                thumbnail: "imgs/02.png"
            },

            // 3
            {
                title: "Bedtime",
                author: "Tristan Zadvorny",
                description: `I used coloured pencils and acrylic wash on regular card paper / 4.5 x 6 
                            ——— My work is inspired by the novelty of going to bed, and sleeping`,
                thumbnail: "imgs/tristen.png"
            },

            // 4
            {
                title: "Blue Gill’s Descent - Journal #2",
                author: "Rowan van Oosten",
                description: `Ink on paper / 15cm x 25cm 
                            ——— My work is inspired by handmade research journals. It explores the fears and feelings of a scientist, 
                            Blue Gills throughout a underwater ecological disaster with a supernatural twist.`,
                thumbnail: "imgs/04.png"
            },


            // 5
            {
                title: "You need to wake up Kevin",
                author: "Kevin Wu",
                description: `I used the color markers to color it. And then made a book by folding the paper. Then put it in the box. 
                            ——— My work was inspired by the fact that I slept for a whole day last week and realized how quickly time passes. I need to cherish time . I created this 
                            book made up of ancient Chinese clocks and Western clock numbers.`,
                thumbnail: "imgs/kevin.png"
            },

            // 6
            {
                title: "Swampy Ditches",
                author: "Maia Venturelli Golba",
                description: `Harvesting in the 905 Watercolour/Acrylic paint and Photo collage / 59 X 11 
                            Inspired by the real harvest records of a local Hamilton farm, Harvesting in the 905 divides time through different vegetables harvested in seasons.”`,
                thumbnail: "imgs/maia.png"
            },

            // 7
            {
                title: "Leave my body behind, I'll take the rest",
                author: "Charlotte Heron",
                description: `Paper, Epson printer, Brother cut and scan / 5.5 in x 9.5 in x 0.5 in 
                            A non linear story about an ever changing relationship to self, gender and womanhood--- it gives just as much as it takes.`,
                thumbnail: "imgs/07.png"
            },

            // 8
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: "imgs/logan.png"
            },

            // 9
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: "imgs/charlie.png"
            },

            // 10
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: "imgs/10.png"
            },


        ]

        function toggleDialog(project) {
            selectedProject.value = project; // Store the clicked project
            showDialog.value = true;        // Open the dialog
        }


        function findCoordinates(event) {
            // clientWidth/Height excludes scrollbars, matching CSS % logic
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;

            const xPercent = (event.clientX / width) * 100;
            const yPercent = (event.clientY / height) * 100;

            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }

        return {
            projects,
            findCoordinates,
            showDialog,
            showIntroDialog,
            toggleDialog,
            selectedProject

        }
    }
}

createApp(App).use(vuetify).mount('#app');
