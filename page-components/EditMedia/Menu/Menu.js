import { ToggleView } from './ToggleView';
import { Create } from './Create';

export const Menu = ({ ...props }) => {
  //
  async function onClickToggleView() {
    props.setController({
      ...props.controller,
      listView: props.controller.listView === 'list' ? 'thumb' : 'list',
    });
  }

  async function onClickToggleCreate() {
    props.setController({
      ...props.controller,
      isCreating: !props.controller.isCreating,
    });
  }

  return (
    <>
      <ToggleView onClick={onClickToggleView} {...props} />
      <Create onClick={onClickToggleCreate} {...props} />
    </>
  );
};
