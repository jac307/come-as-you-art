
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
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%"
            },

            // 2

            {
                title: "",
                author: "",
                description: ``,
                xButton: "68%",
                yButton: "5%",
                wButton: "25%",
                hButton: "5%"
            },

            // 3
            {
                title: "",
                author: "",
                description: ``,
                xButton: "20%",
                yButton: "13%",
                wButton: "40%",
                hButton: "5%"
            },

            // 4
            {
                title: "",
                author: "",
                description: ``,
                xButton: "64%",
                yButton: "13%",
                wButton: "30%",
                hButton: "5%"
            },


            // 5
            {
                title: "",
                author: "",
                description: ``,
                xButton: "20%",
                yButton: "21%",
                wButton: "37%",
                hButton: "5%"
            },

            // 6
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "21%",
                wButton: "30%",
                hButton: "5%"
            },

            // 7
            {
                title: "",
                author: "",
                description: ``,
                xButton: "16%",
                yButton: "29%",
                wButton: "40%",
                hButton: "5%"
            },

            // 8
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "29%",
                wButton: "30%",
                hButton: "5%"
            },

             // 9
            {
                title: "",
                author: "",
                description: ``,
                xButton: "20%",
                yButton: "37%",
                wButton: "37%",
                hButton: "5%"
            },

            // 10
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "37%",
                wButton: "30%",
                hButton: "5%"
            },


             // 11
            {
                title: "",
                author: "",
                description: ``,
                xButton: "15%",
                yButton: "46%",
                wButton: "40%",
                hButton: "5%"
            },

            // 12
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "46%",
                wButton: "30%",
                hButton: "5%"
            },

            // 13
            {
                title: "",
                author: "",
                description: ``,
                xButton: "15%",
                yButton: "54%",
                wButton: "40%",
                hButton: "5%"
            },

            // 14
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "54%",
                wButton: "30%",
                hButton: "5%"
            },

            // 15
            {
                title: "",
                author: "",
                description: ``,
                xButton: "15%",
                yButton: "62%",
                wButton: "40%",
                hButton: "5%"
            },

            // 16
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "70%",
                wButton: "30%",
                hButton: "6%"
            },


              // 17
            {
                title: "",
                author: "",
                description: ``,
                xButton: "15%",
                yButton: "70%",
                wButton: "40%",
                hButton: "6%"
            },

            // 18
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "62%",
                wButton: "30%",
                hButton: "5%"
            },


              // 19
            {
                title: "",
                author: "",
                description: ``,
                xButton: "12%",
                yButton: "79%",
                wButton: "40%",
                hButton: "6%"
            },

            // 20
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "79%",
                wButton: "30%",
                hButton: "5%"
            },

            // 21
            {
                title: "",
                author: "",
                description: ``,
                xButton: "8%",
                yButton: "87.5%",
                wButton: "47%",
                hButton: "6%"
            },

            // 22
            {
                title: "",
                author: "",
                description: ``,
                xButton: "60%",
                yButton: "87.5%",
                wButton: "30%",
                hButton: "6.5%"
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
