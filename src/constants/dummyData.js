const upperSection = {
    title : "Focused on web standards and modern web app UX, you’re simply going to build better websites",
    heading : [
        "Remix has a cheat code:",
        "Nested Routes.", 
        "↑↑↓↓←→←→BA"
        ],
    paragraph : `
    Remix is a full stack web framework that lets you focus
      on the user interface and work back through web standards to
        deliver a fast, slick, and resilient user experience. 
          People are gonna love using your stuff.`
}

const middleSection = {
    title:"While you were waiting for your static site to build, distributed web infra­structure got really good. Break through the static.",
    heading:[
        "Websites usually have levels of navigation that control child views.",
        "Not only are these components pretty much always coupled to URL segments...",
        "...they’re also the semantic boundary of data loading and code splitting.",
        " Hover or tap the buttons to see how they’re all related"
        ],
    paragraph:` Data loading ... 
        You ever notice most of the code in your app is for changing data?
        Imagine if React only had props and no way to set state.
        What’s the point? If a web framework helps you load data but doesn’t help you update it,
        what’s the point? Remix doesn’t drop you off at the <form onSubmit> cliff. 
        (What the heck does event.preventDefault do anyway?)`
}

const lowerSection = {
    title: "Resilient, progressively enhanced data updates are built in.",
    heading: [
        "It’s so simple it’s kind of silly. Just make a form...",
        "...and an action on a route module. It looks like traditional HTML forms but enables fully dynamic web experiences you're after.",
        "Remix runs the action server side, revalidates data client side, and even handles race conditions from resubmissions.",
        "Get fancy with transition hooks and make some pending UI. Remix handles all the state, you simply ask for it.",
        "Or get jiggy with some optimistic UI. Remix provides the data being sent to the server so you can skip the busy spinners for mutations, too."
    ],
    paragraph: `
    export default function NewInvoice() {
        return (
          <Form method="post">
            <input type="text" name="company" />
            <input type="text" name="amount" />
            <button type="submit">Create</button>
          </Form>
        );
      }
      
      export async function action({ request }) {
        const body = await request.formData();
        const invoice = await createInvoice(body);
        return redirect('https://fdfddd.in');
      }
    `
}

export {upperSection, middleSection, lowerSection};