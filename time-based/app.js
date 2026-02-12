
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
                title: "Leaving Class",
                author: "Aliyah Muto",
                description: `This photofilm captures students leaving classes and walking home or into MUSC. I wanted to capture 
                            the emotions of those finished with their classes, with some looking relieved and ready to chat with 
                            friends, and others seeming reserved and ready to head home.`,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/01.png"
            },

            // 2

            {
                title: "A not so long break",
                author: "Austin Frise",
                description: `What I was trying to get across with this project was just how fleeting the breaks we 
                            have as students are. It starts out looking at the monitor of one of the computers in 
                            the media lab, and then I have a bunch of transitional photographs that are from the 
                            perspective of the main character walking to where they are taking a break. The catch is 
                            that the amount of time spent on each photo is longer for the walking and transitional 
                            photographs.`,
                xButton: "68%",
                yButton: "5%",
                wButton: "25%",
                hButton: "5%",
                thumbnail: "imgs/02.png"
            },

            // 3
            {
                title: "Noisy Places",
                author: "Caidence Amartey.",
                description: `This photo film is meant to display peaceful solitude. The title of the project works 
                            to affirm that solitude can be found anywhere. The use of cowboy to close up shots was 
                            intended to ensure all photos generate a sense of distant intimacy. Viewers are in the 
                            space with the subject yet still remain far enough so as to not disturb them. The subject 
                            is in their own serene world. Overexposing the lighting added to the effect of serenity. 
                            It brightens the otherwise poorly lit library and isolates the subject without making the 
                            subject feel isolated.`,
                xButton: "20%",
                yButton: "13%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/03.png"
            },

            // 4
            {
                title: "Signs of Presence",
                author: "Xiaoqian Wen",
                description: `I focus on school spaces where there are signs of student activity but no students appear. 
                            Through small details in these corners, I try to show that students have been there. The 
                            series starts with sunlight from a low angle, and the light slowly fades into darkness. 
                            I mainly choose natural elements, metal, and walls, because they are common materials on 
                            campus and create a real school feeling.`,
                xButton: "64%",
                yButton: "13%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/04.png"
            },


            // 5
            {
                title: "accretion",
                author: "Charlotte Payne",
                description: `This piece is inspired by the defi nition of the word “accretion,” defi ned as the process 
                            of growth or increase, typically by the gradual accumulation of additional layers or matter. 
                            It follows the encroachment of nature into modern architecture, beginning with isolated 
                            buildings, moving through moments of coexistence between nature and the built environment, 
                            and culminating in a pure focus on nature. The ambience of car noises gradually giving way 
                            to birds chirping and ambient music reinforces this micronarrative and enhances the atmosphere. 
                            Ultimately, this piece exemplifi es the emptiness of man-made structure without the presence 
                            of greenery, illustrating that humanity cannot exist without it.`,
                xButton: "20%",
                yButton: "21%",
                wButton: "37%",
                hButton: "5%",
                thumbnail: "imgs/05.png"
            },

            // 6
            {
                title: "The Peek 觀𥦬日記",
                author: "Charlotte Wong",
                description: `The Peek explores the transition from human presence to absence through window-framed images. Images 
                            transfer from lively scenes with people to empty classrooms and hallways, as well as spaces that suggest 
                            recent activity despite their emptiness. Each strong note switches to a new image, reflecting how the 
                            human eye blinks and refocuses. Combine both visual and sound together reflect on absence, and the 
                            lingering traces of everyday life.`,
                xButton: "60%",
                yButton: "21%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/06.png"
            },

            // 7
            {
                title: "Frozen in Time",
                author: "Christian F Downey-Acevedo",
                description: `This composition captures a dog, observing a still forest. Each transition between photographs is representative 
                            of the dog blinking and looking around. Within this still forest, the dog observes mannequin like tree branches, 
                            that once held life and posture. The dog comes across a particular branch that has the texture of platinum, a boat 
                            sailing on grassy waves, and a smiling tree, observing the dog’s curiosity.`,
                xButton: "16%",
                yButton: "29%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/07.png"
            },

            // 8
            {
                title: "Caught in Passing",
                author: "Damian Boukhers",
                description: `Caught in Passing is a black-and-white picture film that depicts an underground campus parking garage 
                             as a shared space for architectural and human presence. The sequence balances moments of movement and 
                             stillness using repetition, low light, and restrained pace, giving the subject and surroundings equal 
                             visual weight. Meaning comes gradually from spatial rhythm and subtle visual transitions rather than 
                             narrative action.`,
                xButton: "60%",
                yButton: "29%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/08.png"
            },

             // 9
            {
                title: "Blown Fuse",
                author: "Emaris Cruz-Sanchez",
                description: `Blown Fuse is a piece about the attempts to respark imagination during phases of boredom or burnout, 
                            but to no avail. The image above is representative of the slow passage of time while capturing the empty 
                            hollow feeling one gets when looking at themselves for inspiration. The subject was asked to create puppet 
                            figures and the photos were taken as they slowly gave up and ran out of ideas. Gently complementing the 
                            series of photos is the sound of a damaged fluorescent capacitor repeatedly failing to turn on the light.`,
                xButton: "20%",
                yButton: "37%",
                wButton: "37%",
                hButton: "5%",
                thumbnail: "imgs/09.png"
            },

            // 10
            {
                title: "Curly Hair",
                author: "Jitong Li",
                description: `As an East Asian girl, having curly hair was one of my defining features 
                            when most people around me had straight hair. When I was young, I didn't realize what it 
                            brought to me, but during my adolescence, this characteristic also meant a certain degree 
                            of uniqueness. This distinctiveness brought burdens and some troubles I couldn't resolve 
                            at the time. However, during my growth process, I chose to adjust my way of coexisting 
                            with it in a gentler manner. Now, I've gradually made peace with my hair. I understand 
                            everyone's differences and have begun to respect each person's unique traits.`,
                xButton: "60%",
                yButton: "37%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/10.png"
            },


             // 11
            {
                title: "JAWANI",
                author: "Jovan Singh",
                description: `The name Jovan is derived from the Panjabi word jawani, meaning youth and the 
                            prime of life. This documentary traces my personal journey growing up Canadian-Panjabi 
                            and learning how to navigate and reconcile my queer identity within family, culture, 
                            religion, and expectation. Drawing from childhood archives alongside present-day 
                            footage, the film reflects on early moments of self-expression and becoming. Through 
                            poetic voiceover, JAWANI explores identity as layered and unfinished. Rather than 
                            offering a clear resolution, the documentary invites viewers to sit with ambiguity 
                            and complexity of growing into oneself.`,
                xButton: "15%",
                yButton: "46%",
                wButton: "40%",
                hButton: "5%"
            },

            // 12
            {
                title: "Love you, Love me.",
                author: "Jiaxin Chen",
                description: `This documentary explores the emotional power of idols and how that power shapes personal 
                            growth. Growing up in a family where love was rarely felt, I found comfort and strength in 
                            a group of idols who were energetic, positive and inspiring. Their presence brought light 
                            into a dark time in my life, gave me direction and helped me feel the power of love. The 
                            documentary follows my journey from admiring them as a child to meeting them in person at a 
                            concert ten years later. By traveling to the city where they lived and grew up and walking 
                            through places connected to their path, the documentary shows how the emotional bond between 
                            idols and fans can feel distant yet deeply connected. Through them, I learned how to understand 
                            myself, make peace with my past and find the courage to move forward. Loving them also taught 
                            me how to love myself.`,
                xButton: "60%",
                yButton: "46%",
                wButton: "30%",
                hButton: "5%"
            },

            // 13
            {
                title: "Somewhere Between Languages",
                author: "Jinni Chi",
                description: `Somewhere Between Languages is an autobiographical documentary that reflects on
                            growing up across different languages and cultural environments. Raised in a bilingual
                            household, the artist learned early that language is not only a way to communicate, but also
                            a way to adapt and fit in. Over time, this process of adjustment shaped how she speaks,
                            listens, and stays silent.
                            Using personal archival materials such as childhood photographs and family images, the
                            documentary traces moments of transition from early life to studying abroad. Analogue
                            media processes, including scanning and CRT re-recording, are used to translate these
                            memories across formats. Through distortion, repetition, and material texture, the work
                            mirrors how memories and identities are filtered over time. Rather than focusing on
                            migration itself, the project examines the subtle cost of constant adaptation and the ongoing
                            search for belonging without self-censorship.`,
                xButton: "15%",
                yButton: "54%",
                wButton: "40%",
                hButton: "5%"
            },

            // 14
            {
                title: "A Letter to Big Me",
                author: "Lara Sansoya",
                description: `A Letter to Big Me is a reflective short auto-biographical documentary exploring identity, 
                            memory, and the evolving relationship we have with ourselves. Built around a personal letter
                            written years ago, the film follows the experience of revisiting younger hopes, fears, and 
                            promises through the lens of the present. Using handwritten text, intimate narration, and visual
                            fragments, the project captures the quiet distance between who we were and who we are becoming. 
                            Rather than offering clear answers, the film embraces uncertainty, presenting identity as
                            something layered, and continually unfolding. The act of revisiting the letter becomes an opening 
                            for the present, as new words are written toward an unknown future, honoring the space between 
                            past and present selves. At its heart, the film is an act of compassion toward the self: a reminder 
                            that every version of us is still learning, still trying, and still worthy of becoming.`,
                xButton: "60%",
                yButton: "54%",
                wButton: "30%",
                hButton: "5%"
            },

            // 15
            {
                title: "My Mothers Daughter",
                author: "Jamila Andriesa",
                description: `My film explores the relationship between growing up with an abusive mom and performance. It shows 
                            the connection between invisibility and eccentricity.`,
                xButton: "15%",
                yButton: "62%",
                wButton: "40%",
                hButton: "5%"
            },

            // 16
            {
                title: "24 Kilograms ",
                author: "Emma Nash",
                description: `How do you cram your entire life into one suitcase, weighing no more than 24 kilograms? This piece is a 
                            personal reflection on the author's travel and transition to Canada from Aotearoa (New Zealand), as an 
                            exciting but fast and overwhelming experience. The presentation of an expansive range of photography and 
                            videography, shot in both countries, juxtaposes a small number of personal belongings brought with the author. 
                            Using these objects of signifance as motif, alongside quick, driving changes in pace, the piece aims brings 
                            light to the unsettling nature of settling in a new place, while exploring themes of nostalgia, anxiety, 
                            and eventual peace and acceptance.`,
                xButton: "60%",
                yButton: "70%",
                wButton: "30%",
                hButton: "6%"
            },


              // 17
            {
                title: "Diary of a creative",
                author: "Eniola Olawale-Yusuf",
                description: `The documentary is a reflective narration of the transformation and the growth of an artist. It goes 
                            back to the childhood moments and key pivotal moments to support the narration of what has contributed 
                            to make them fall in love with the art of creating. It uses an intimate first-person narrative perspective 
                            to trace my journey as an artist who discovered her creative identity gradually through lived experiences 
                            and memorable connections. It highlights elements from the world that has weaved itself in the exploration 
                            of identity through art, inviting the viewers to see the mind of a creative through her lens.`,
                xButton: "15%",
                yButton: "70%",
                wButton: "40%",
                hButton: "6%"
            },

            // 18
            {
                title: "My Girl",
                author: "James Schütte",
                description: `In an attempt to understand the life of a beloved companion, I dissect the knowledge and memories 
                            that I have of her. My Corgi manifests differently through the lenses of philosophy, science, and 
                            emotion, leaving no clear path for closure. Through a combination of archived photos and videos, 
                            3D animation, and video editing, I do my best to bring the viewer into a world where existence without 
                            purpose is redundant, yet purpose without existence is nothing at all.`,
                xButton: "60%",
                yButton: "62%",
                wButton: "30%",
                hButton: "5%"
            },


              // 19
            {
                title: "Tonight, Just Us",
                author: "Serena Lei",
                description: `My early experiences served as the inspiration for this short film. Both of my parents were very busy 
                            with their jobs when I was a small child, so I spent a lot of my early years alone. Instead of disagreements, 
                            their absence was characterized by silence, a stillness that grew accustomed with time. I discovered a 
                            teddy bear one day. It became my most significant friend after that. I started talking to this bear as 
                            though it were alive on the days when my parents weren't there and I had no one to talk to. I opened up to 
                            it about everything, including my worries, little everyday discoveries, and secrets I wasn't yet ready to 
                            discuss with grownups. Over time, this bear became more than just a toy. It turned into a quiet mirror that 
                            was like a second me, enabling me to organize my inner world and externalize my feelings. These made-up 
                            dialogues taught me how to deal with loneliness, self-soothe, and endure emotional isolation. The teddy bear 
                            served as a witness and a healer, assisting me in developing my sense of self while I was cut off from other 
                            people.`,
                xButton: "12%",
                yButton: "79%",
                wButton: "40%",
                hButton: "6%"
            },

            // 20
            {
                title: "Beside Me",
                author: "Xingguo Li",
                description: `I chose to create this documentary to share how I relate to my family and how my personality
                            gradually took shape within these relationships. By revisiting moments from childhood, I began
                            to recognize how ordinary, often unnoticed experiences quietly influenced the way I learned to
                            feel, observe, and respond to others. This documentary uses childhood memory as its starting 
                            point to explore how emotional awareness and self-identity develop over time. Through family 
                            photographs and home videos, the work reflects on moments that once felt simple or playful and 
                            reconsiders the meaning they carry when viewed from the present.`,
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
