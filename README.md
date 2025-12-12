1. How did you handle optional props in your components?
> I assign these optional props a default value just in case they're not passed in. I used a ternary operation to display the props if they're undefined or not.

2. What considerations did you make when designing the component interfaces?
> I finally got the chance to dive right into utilizing Material UI (MUI) for React. The MUI grid system had similarities to Bootstrap's grid system so it was a bit familiar to work with. Still getting the hand of getting the CSS layout juuuuuust right. I added responsive breakpoints throughout the profile card.

3. How did you ensure type safety across your components?
> The arguments for the components was wrapped around a Props interface to ensure that props passed in to that component for later destructuring is the right kind of property, including required and optional props. It was handled using React.FC<[YourPropertyInterfaceTypeHere]>. I also constructed objects such as User or Product in App.tsx with their specific typing const user1: User = {}

4. What challenges did you face when implementing component composition?
> The onClick or generic function events were a bit funky to figure out how to add them, especially when they're returning a value from the child; had a TypeScript error that user profile onClick() might return undefined, so I had to handle that.

Sources used:
[Official React documentation](https://react.dev/learn/your-first-component)
[Material UI documentation](https://mui.com/material-ui/all-components/)
[Deploying Vite Projects On GitHub Pages documentation](https://vite.dev/guide/static-deploy)
[A simple Vite project repo with instructions on how to deploy to GitHub pages](https://github.com/sitek94/vite-deploy-demo)