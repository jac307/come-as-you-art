
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
                const showDialog = ref(false)
        const selectedProject = ref({}); // Holds the clicked project's data
        const projects = [
            // 1
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/01.png"
            },

            // 2

            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/02.png"
            },
            },

            // 3
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/03.png"
            },
            },

            // 4
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/04.png"
            },
            },


            // 5
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/05.png"
            },
            },

            // 6
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/06.png"
            },
            },

            // 7
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/07.png"
            },
            },

            // 8
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/08.png"
            },
            },

             // 9
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/09.png"
            },
            },

            // 10
            {
                title: "",
                author: "",
                description: ``,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/10.png"
            },
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
            toggleDialog,
            selectedProject

        }
    }
}

createApp(App).use(vuetify).mount('#app');
