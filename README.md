# Trivia Game

## Development Setup

### Project Setup

This project assumes Node v16.19.0 or better.  Clone the project and navigate to the project root.  Be sure to run
`nvm use` to adjust your terminal window to the correct node version.  Then run `npm i`.

### Local Database Setup

This project uses [Supabase](https://supabase.com/), which can be run locally via [Docker](https://www.docker.com/).  

Ensure Docker desktop is running and create the DB by running:

```shell
npx supabase init
```

(this may require a local package install; select "y") then run:

```shell
npx supabase start
```

This will download the necessary docker images and start the instance.  You should see a list of contextual information 
in the terminal:

![supabase db info.png](readme-docs%2Fsupabase%20db%20info.png)

Create a `.env.local` file and paste in the `API URL` and `anon key` provided as the following variables:

```shell
VITE_SUPABASE_URL=<your API URL here>
VITE_SUPABASE_ANON_KEY=<your anon key here>
```