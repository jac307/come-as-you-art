
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
                title: "Variations of Water",
                author: "Brooke Shelley",
                description: `My idea was to find different forms of water on McMaster campus (running water fountain, 
                            ice, snow, puddle, water bottle). I applied the rule of thirds and leading lines to my various 
                            shots including extreme close up, close up, wide shot, and medium shot. To make sure I got 
                            the flow of the water with a good depth of field I made sure to turn on continuous shots on 
                            the camera. Additionally, in Adobe Premiere Pro I purposefully made the pacing start slow when 
                            showing the bottled water, then the pacing gets quicker as the water appears through sinks and 
                            fountains, and processes to slow down when the water is in the form of snow and puddles. The 
                            pacing along with the peaceful water sounds are meant to create and enhance the water 
                            photography story.`,
                xButton: "20%",
                yButton: "13%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/03.png"
            },

            // 4
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
                xButton: "64%",
                yButton: "13%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/04.png"
            },


            // 5
            {
                title: "Signs of Presence",
                author: "Xiaoqian Wen",
                description: `I focus on school spaces where there are signs of student activity but no students appear. 
                            Through small details in these corners, I try to show that students have been there. The 
                            series starts with sunlight from a low angle, and the light slowly fades into darkness. 
                            I mainly choose natural elements, metal, and walls, because they are common materials on 
                            campus and create a real school feeling.`,
                xButton: "20%",
                yButton: "21%",
                wButton: "37%",
                hButton: "5%",
                thumbnail: "imgs/05.png"
            },

            // 6
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
                xButton: "60%",
                yButton: "21%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/06.png"
            },

            // 7
            {
                title: "The Peek 觀𥦬日記",
                author: "Charlotte Wong",
                description: `The Peek explores the transition from human presence to absence through window-framed images. Images 
                            transfer from lively scenes with people to empty classrooms and hallways, as well as spaces that suggest 
                            recent activity despite their emptiness. Each strong note switches to a new image, reflecting how the 
                            human eye blinks and refocuses. Combine both visual and sound together reflect on absence, and the 
                            lingering traces of everyday life.`,
                xButton: "16%",
                yButton: "29%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/07.png"
            },

            // 8
            {
                title: "Frozen in Time",
                author: "Christian F Downey-Acevedo",
                description: `This composition captures a dog, observing a still forest. Each transition between photographs is representative 
                            of the dog blinking and looking around. Within this still forest, the dog observes mannequin like tree branches, 
                            that once held life and posture. The dog comes across a particular branch that has the texture of platinum, a boat 
                            sailing on grassy waves, and a smiling tree, observing the dog’s curiosity.`,
                xButton: "60%",
                yButton: "29%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/08.png"
            },

             // 9
            {
                title: "Caught in Passing",
                author: "Damian Boukhers",
                description: `Caught in Passing is a black-and-white picture film that depicts an underground campus parking garage 
                             as a shared space for architectural and human presence. The sequence balances moments of movement and 
                             stillness using repetition, low light, and restrained pace, giving the subject and surroundings equal 
                             visual weight. Meaning comes gradually from spatial rhythm and subtle visual transitions rather than 
                             narrative action.`,
                xButton: "20%",
                yButton: "37%",
                wButton: "37%",
                hButton: "5%",
                thumbnail: "imgs/09.png"
            },

            // 10
            {
                title: "Blown Fuse",
                author: "Emaris Cruz-Sanchez",
                description: `Blown Fuse is a piece about the attempts to respark imagination during phases of boredom or burnout, 
                            but to no avail. The image above is representative of the slow passage of time while capturing the empty 
                            hollow feeling one gets when looking at themselves for inspiration. The subject was asked to create puppet 
                            figures and the photos were taken as they slowly gave up and ran out of ideas. Gently complementing the 
                            series of photos is the sound of a damaged fluorescent capacitor repeatedly failing to turn on the light.`,
                xButton: "60%",
                yButton: "37%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/10.png"
            },


             // 11
            {
                title: "DON’T BLINK",
                author: "Eniola Olawale-Yusuf",
                description: `The photo series follows feelings of being watched and analyzed from afar. This character has a sense of 
                            paranoia and is hyper aware of their surroundings reinforcing their worry and fear. As the photos go on, 
                            the character makes brief eye contact with their stalker which eventually leads to a confrontation after 
                            attempts to run away. The photos prompt the audience to question who the stalker might be and what is going 
                            on behind the camera.`,
                xButton: "15%",
                yButton: "46%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/11.png"
            },

            // 12
            {
                title: "Campus",
                author: "Finley Jon",
                description: `TThis piece was originally created to document the feeling of walking around campus with the crowds that 
                            form between classes, but I couldn’t catch the crowds in the time that I had so instead I captured this strange, 
                            nearly empty campus. The photos show campus at a time of day with a very dramatic light, at a strange temperature 
                            for the time of year, and a weird combo of a relatively high amount of water on the ground and trees, dead from 
                            the cold winter that seems not to exist in the photos taken.`,
                xButton: "60%",
                yButton: "46%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/12.png"
            },

            // 13
            {
                title: "Going Up",
                author: "Julia Ross",
                description: `A 30-second black-and-white photo film highlighting the calmness and simplicity of the process of using an elevator. 
                            Beginning with a shot of the button to call the elevator, the film goes through each of the steps, from pressing the 
                            button, waiting for it to arrive, getting on the elevator, choosing which floor to get off on, and the doors closing 
                            behind you. The shots utilize blurred objects such as the elevator doors and hands to symbolize motion.`,
                xButton: "15%",
                yButton: "54%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/13.png"
            },

            // 14
            {
                title: "Pausing in the stairwell",
                author: "Wenjin Lyu",
                description: `This project focuses on the transitional space of campus stairwells, capturing moments when figures exist between 
                            motion and stillness during their passage. The subjects do not look directly at the camera; instead, they are frozen 
                            in mid-action. Their postures and flowing hair suggest continuous movement, yet they are momentarily suspended. The 
                            staircase's railings and walls form a closed, distinct geometric structure that envelops the figures, transforming 
                            the space itself into a visual framework that both constrains and guides the body. Through monochrome imagery and stark 
                            chiaroscuro, the work cultivates a cool, restrained observational perspective, prompting viewers to slow their gaze and 
                            rediscover the subtle states and fleeting sensations often overlooked in daily passage.`,
                xButton: "60%",
                yButton: "54%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/14.png"
            },

            // 15
            {
                title: "Disconnect",
                author: "Kale Ratcliffe",
                description: `This project is meant to be uncanny, and evoke the sense of disconnect that its name obviously implies. The model poses 
                            around regular locations, but often in odd ways. And more importantly, her face is always obscured– first by the angle, 
                            then by objects, then visible only through reflections. Whether the shot is closeup or far away, the lack of a face makes 
                            the main character mysterious and prevents the viewer from understanding her (what is she doing? How does she feel about 
                            all this? What does she look like?).`,
                xButton: "15%",
                yButton: "62%",
                wButton: "40%",
                hButton: "5%",
                thumbnail: "imgs/15.png"
            },

            // 16
            {
                title: "In A Bubble",
                author: "Kirsten Fortuna",
                description: `With this video, I wanted to showcase the students at McMaster and how many travel around campus in their own bubble. 
                            Each photo showcases a different individual or group and how they choose to spend their time when not in class.`,
                xButton: "60%",
                yButton: "70%",
                wButton: "30%",
                hButton: "6%",
                thumbnail: "imgs/16.png"
            },


              // 17
            {
                title: "Transition Into Focus",
                author: "Maheen Shaiq",
                description: `This photofilm observes a shift from movement to stillness as a student enters the computer lab and settles into their 
                            workspace. The sequence captures the quiet rhythm of academic life the pause at the doorway, the navigation through rows 
                            of computers, and the eventual immersion in screen light.`,
                xButton: "15%",
                yButton: "70%",
                wButton: "40%",
                hButton: "6%",
                thumbnail: "imgs/17.png"
            },

            // 18
            {
                title: "People Watching",
                author: "Mariana Fonseca Hernández",
                description: `People Watching is a series of photographs taken at McMaster University campus. These photographs are from the perspective 
                            of a people watcher in their day-to-day routine. The series emphasizes social interactions and small details like pieces of 
                            clothing and food that give insight into the object's life and what they value.`,
                xButton: "60%",
                yButton: "62%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/18.png"
            },


              // 19
            {
                title: "The Arcade",
                author: "Marzia Sarker",
                description: `This photo film captures my friend, Ansa, exploring the games in the campus arcade. By removing colour, the lively arcade 
                             moment feels quieter and more introspective, with light and contrast guiding the viewer’s attention. The film highlights 
                             the shifts between movement and stillness as Ansa plays, focusing on each game. I wanted to show how even a playful environment 
                             can also feel quiet, focused, and unexpectedly personal.`,
                xButton: "12%",
                yButton: "79%",
                wButton: "40%",
                hButton: "6%",
                thumbnail: "imgs/19.png"
            },

            // 20
            {
                title: "McMaster Built Against Time",
                author: "Maya Horvat",
                description: `Located in Hamilton, Ontario is the campus of McMaster University. On a daily basis, staff, students, 
                            and visitors pass by and perhaps walk through Hamilton Hall. Yet, they may be extremely busy and not realize 
                            the beauty of the old, gothic architecture appearing on academic buildings. Therefore, the Photo Film of 
                            McMaster Built Against Time encourages audiences to become more observant of the timeless features that 
                            surround them on campus grounds.`,
                xButton: "60%",
                yButton: "79%",
                wButton: "30%",
                hButton: "5%",
                thumbnail: "imgs/20.png"
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
