// src/components/Welcome.js

/**
 * A simple component demonstrating JSX within a .js file.
 * @param {object} props
 * @param {string} props.name The name to greet.
 */
function Welcome({ name }) {
  // Vite automatically processes the JSX syntax below.
  return (
    <div className="text-3xl font-bold underline">
    <div className="p-6 rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
          <p>
            The background and text of this card change when you toggle the theme. This is possible because we apply the **`dark:bg-gray-800`** and **`dark:text-white`** classes.
          </p>
          <p className="mt-4 text-sm text-red-600 dark:text-gray-400">
            Tailwind CSS automatically handles the context.
          </p>
        </div>
    </div>
  );
}

// Don't forget to export the component
export default Welcome;