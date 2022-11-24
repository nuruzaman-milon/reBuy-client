import React from 'react';

const Blog = () => {
    return (
        <div className='w-[92%] mx-auto'>
            <div className='bg-slate-300 p-6 my-6 rounded-lg'>
                <h3 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                <p>
                    The Four Kinds of React State to Manage. Local state, Global state,Server state & URL state. <br />
                    Let's cover each of these in detail: <br />
                    <strong>Local (UI) state:</strong> <br /> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                    <strong>Global (UI) state:</strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global. <br />

                    <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                    <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='bg-slate-300 p-6'>
                <h3 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                <p>
                    The Four Kinds of React State to Manage. Local state, Global state,Server state & URL state. <br />
                    Let's cover each of these in detail: <br />
                    <strong>Local (UI) state:</strong> <br /> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />

                    <strong>Global (UI) state:</strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global. <br />

                    <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                    <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
        </div>
    );
};

export default Blog;