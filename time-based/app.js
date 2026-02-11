
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
                title: "The Utopia Daughter: A Distance of 11,400km",
                author: "Xuezi Jin (Eloise)",
                description: `This autobiographical documentary explores how distance redefines intimacy. As a22-year-old
                            woman raised in an East Asian household, I examine my anxious
                            attachment style to reveal an absence in my upbringing, parental favoritismandemotional
                            estrangement within my own family. The film spans 11,400 kilometers
                            between Shanghai and Hamilton, documenting my journey from being a "spectator"in my birth
                            family to finding belonging within my chosen family of close friends. Byrecognizing the
                            seasonal nature of all relationships, I arrive at a reconciliation withpain: accepting the
                            impermanence of connection while preserving a fragile yet
                            precious "Utopian" bond with my parents, one that can only exist across distance.`,
                thumbnail: "imgs/01.png"
            },

            // 2

            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 3
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 4
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },


            // 5
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 6
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 7
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 8
            {
                title: "",
                author: "",
                thumbnail: ""
            },

            // 9
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 10
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },


            // 11
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 12
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 13
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 14
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 15
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 16
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },


            // 17
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 18
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },


            // 19
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 20
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 21
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
            },

            // 22
            {
                title: "",
                author: "",
                description: ``,
                thumbnail: ""
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
