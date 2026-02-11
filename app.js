
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
                title: "Moldy Apple",
                author: "Jiamin Ouyang",
                description: `I grew up under the care of my grandparents, and as I grew older, they
                            became my emotional anchor. To me, they were not only respected elders,
                            but also close friends and joyful companions. They left their hometown and
                            traveled 1,500 kilometers to a strange city, giving up the comfort of their later
                            years simply to raise me. I could always feel the depth of their love. Even
                            when I attended boarding school and faced weekly separations, those
                            temporary goodbyes were nothing compared to the finality of real loss. My
                            grandfather’s passing taught me that if I remember him, as long as someone
                            remembers him, he has not truly disappeared. I loved eating peeled apples,
                            and my grandfather would always smile while carefully peeling one for me.
                            Now, a forgotten apple turning moldy reminds me that the hands that once
                            prepared it with love are no longer here. I will treasure every moment with my
                            grandmother, and I will always love them.`,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%"
            },

            // 2

            {
                title: "What I Remember",
                author: "Sandhya Acharya",
                description: `I’ve always had a terrible memory. This short documentary grows out of that feeling where 
                            I try to piece together what I remember from my childhood, my parents, and the stories that 
                            shaped me. I talk about my parents as complicated people, and how those memories shifted as 
                            I got older. This film blends reflection with moments of humour, showing how laughter can exist 
                            alongside grief. I also speak of my dad’s passing as a part of the ongoing way I remember him 
                            and carry him with me.`,
                xButton: "68%",
                yButton: "5%",
                wButton: "25%",
                hButton: "5%"
            },

            // 3
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
                xButton: "20%",
                yButton: "13%",
                wButton: "40%",
                hButton: "5%"
            },

            // 4
            {
                title: "Life is like a bar of soap",
                author: "Yuna Liu",
                description: `Each summer, when I return home, my mother places a new bar of soap beside the sink. 
                            By the time I leave again, it has quietly worn away. This simple ritual became the 
                            starting point for an autobiographical film about time, memory, and distance.
                            Through personal archives, voice over, and music, the work reflects on the experience 
                            of growing up and moving away from home. The soap becomes a fragile clock that measures 
                            the slow rhythm of leaving and returning, presence and absence. By focusing on an ordinary 
                            object, the film invites viewers to consider how small, unnoticed moments hold emotional 
                            weight, and how memories continue to change as we move forward.
`,
                xButton: "64%",
                yButton: "13%",
                wButton: "30%",
                hButton: "5%"
            },


            // 5
            {
                title: "Through Static and Memory",
                author: "Tyler Hooper",
                description: `Project description: This autobiographical documentary explores childhood memories through 
                            a mixture of family photos, home videos and personal childhood photos using analogue techniques 
                            to re-record and transform archival material. The film transitions between still images and 
                            slowed-down videos featuring moments of distortion and instability throughout, reflecting how 
                            memory is often uncertain and changes over time. The soundtrack features a recording of the 
                            filmmaker playing piano as a child; the audio is slowed and distorted to create something that 
                            sounds familiar yet feels distant at the same time. Instead of trying to interpret the past, 
                            this documentary acknowledges memories as emotional, inconsistent, and shaped by what remains 
                            recorded.`,
                xButton: "20%",
                yButton: "21%",
                wButton: "37%",
                hButton: "5%"
            },

            // 6
            {
                title: "Crossing the Alexandra Bridge",
                author: "Stephen Bowles",
                description: `Growing up, I always hated driving through the flat, mundane streets of the Canadian suburbs. 
                            Everything is just so far apart, it feels impossible to walk anywhere. Every plot of land is 
                            filled by a plaza with an oversized parking lot. Every store is corporate and sells the same 
                            thing for varying, hiked up prices. I was so sick of it. When I turned 18, I decided to escape 
                            the excruciatingly tedious life of the Canadian suburbs and take a two week long trip to the 
                            city of Ottawa. Crossing the Alexandra Bridge is about the excitement and mystique of falling 
                            in love with a place and earning your independence through the questionable decisions you make 
                            during your adolescence.`,
                xButton: "60%",
                yButton: "21%",
                wButton: "30%",
                hButton: "5%"
            },

            // 7
            {
                title: "GO SPORTS",
                author: "Matteo Reda",
                description: `This documentary is a key to my life, and wat I go through on a day-to-day basis. As cliche as 
                            it sounds, I've been around sports my entire life and I don't regret one bit of it. Every relationship, 
                            memory, and excitement in my life I feel comes from sports. My family all played sports growing up 
                            and it is fundamental for physical activity and mental strength. This passion of mine will never end 
                            and is part of my identity and personality. Every day I go about my life working out, playing hockey, 
                            watching football, spending time with my teammates... The glue to my life is sports. I don't think that 
                            when it's all said and done and I am done playing competitive sports, I would disregard everything that 
                            has made me who I am. Whether it was when I was 3 or 20, there was never any bit of regret to play any 
                            sport with anyone at anytime.
                            So here’s to sports! Go Sports!`,
                xButton: "16%",
                yButton: "29%",
                wButton: "40%",
                hButton: "5%"
            },

            // 8
            {
                title: "A Glimpse Through my Eyes",
                author: "insomniak03",
                description: `For this video I wanted to try and emulate the feeling
                             that you get flipping through a photo album. By incorporating fast
                             moving images with slower, calmer video elements I intended to
                             imitate the highs and lows of everyday life and how quickly
                             memories can be forgotten.`,
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
