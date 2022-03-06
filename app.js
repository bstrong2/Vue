const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        // Get a random user from an API
        async getUser(){
            
            // Get store the data of the random user
            const res = await fetch('https://randomuser.me/api')

            // Make that data into a json file
            const {results} = await res.json()
            
            // Display that json file to the console so we can see what data to grab from the array
            console.log(results)

            // Display the data that we want to the page
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

            
        }
    }
})

app.mount('#app');