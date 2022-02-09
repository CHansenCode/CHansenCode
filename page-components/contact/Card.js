import css from './Card.module.scss';

import { InputLabel, Button, Label } from 'components';

export const Card = ({ data, controller, ...props }) => {
  return (
    <>
      <div className={`pc5b ${css.card}`}>
        <>
          <Label
            height="2.5rem"
            margin="0 0 0.75rem 0"
            bodyClass="sc"
            label="from"
            body={data.name}
          />
          <Label
            height="2.5rem"
            margin="0 0 0.75rem 0"
            label="contact info"
            body={data.contactInfo}
          />
          <Label
            height="3.5rem"
            margin="0 0 0.75rem 0"
            label="message"
            body={`${data.message.substring(0, 60)}${
              data.message.length > 60 ? '...' : ''
            }`}
          />
          {data.createdAt && (
            <h6 className={css.date}>{data.createdAt.substring(0, 10)}</h6>
          )}
        </>

        {controller.isDeleting && (
          <Button
            className={css.delete_button}
            text="x"
            onClick={props.onDelete}
          />
        )}
        {controller.isDeleting ? '' : <HoverBox data={data} />}
        <div className={css.white_fade} />
      </div>

      <style jsx>
        {`
          .cont_card_row {
            width: 100%;

            display: flex;
          }
        `}
      </style>
    </>
  );
};

const HoverBox = ({ data }) => {
  return (
    <div className={`sc5b bg ${css.hover_box}`}>
      <div className="bg sc1b">
        <Label
          height="2.5rem"
          margin="0 0 0.75rem 0"
          label="from"
          body={data.name}
        />
        <Label
          height="2.5rem"
          margin="0 0 0.75rem 0"
          label="contact info"
          body={data.contactInfo}
        />
        <Label
          bodyClass="bg sc1b sc"
          height="3.5rem"
          margin="0 0 0.75rem 0"
          label="message"
          body={data.message}
        />
      </div>
    </div>
  );
};
