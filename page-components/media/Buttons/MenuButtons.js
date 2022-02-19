import { ToggleView } from '.';

export const MenuButtons = ({ ...props }) => {
  //
  async function onClickToggleView() {
    props.setController({
      ...props.controller,
      listView: props.controller.listView === 'list' ? 'thumb' : 'list',
    });
  }

  return (
    <>
      <ToggleView onClick={onClickToggleView} {...props} />
    </>
  );
};
