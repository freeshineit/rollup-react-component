import { createRoot } from 'react-dom/client';
import Page from './page';
interface Options {
  id: string | HTMLElement;
}
class RollupReactComponent {
  $container: HTMLElement;
  constructor(options: Options) {
    if (typeof options.id === 'string') {
      this.$container = document.getElementById(options.id) as HTMLElement;
    } else {
      this.$container = options.id;
    }
    this.render();
  }

  render() {
    return createRoot(this.$container).render(<Page />);
  }
}

export default RollupReactComponent;
