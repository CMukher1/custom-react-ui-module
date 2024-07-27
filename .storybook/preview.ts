import type { Preview } from "@storybook/react";
import '../src/styles/index.css'; // Adjust this path if necessary

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;