import { h } from 'preact';

export default function Callout({ variant = 'info', children }) {
  const colorStyles = {
    info: {
      borderLeft: '5px solid rgb(119, 32, 115)',
      backgroundColor: 'hsla(303, 74%, 92%, 0.4)',
    },
    danger: {
      borderLeft: '5px solid #f44336',
      backgroundColor: 'rgb(253, 236, 234)'
    }
  }

  return (
    <aside
      className="py-4 px-8 my-6 mx-auto last:mb-0"
      style={colorStyles[variant]}>
      {children}
    </aside>
  );
}