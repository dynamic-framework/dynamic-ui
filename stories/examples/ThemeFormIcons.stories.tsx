import { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeFormIcons } from './ThemeFormIconsExamples';

const meta = {
  title: 'Design System/Examples/Theme Form Icons (debug)',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Banco de pruebas para el reporte de los iconos de formulario horneados en SCSS.

El fondo de \`.form-check-input:checked\` es \`var(--bs-primary)\` y sigue al theme.
Los iconos que van encima se compilan a data URI con el color ya resuelto, así que
no lo siguen: con un \`primary\` claro el check queda blanco sobre fondo claro.

Las dos columnas tienen el mismo marcado; la derecha va dentro de una zona con un
theme que cambia \`primary\`, \`success\`, \`danger\` y \`gray-500\`. La tabla mide, en el
navegador, el color horneado de cada icono y su contraste contra lo que tiene debajo.
        `,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Problema: Story = {
  name: 'Iconos que no siguen al theme',
  render: () => <ThemeFormIcons />,
};
