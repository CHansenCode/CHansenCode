import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  Grid,
  Form,
  Input,
  Textarea,
  Button,
  ObjectViewer,
} from 'components';

import {
  getOccupations,
  postOccupation,
  patchOccupation,
  deleteOccupation,
} from 'apiCalls';

export default function Occupation({ ...props }) {
  const dispatch = useDispatch();
  //
  const [formData, setFormData] = useState({ ...initData });
  const [activeId, setActiveId] = useState('');
  const [controller, setController] = useState(false);

  async function onClickDelete(post) {
    deleteOccupation(post._id);
  }
  async function setData() {
    setOccuData([{ title: 'cow' }]);
  }

  const store = useSelector(state => state.occupation);

  async function getMeMyData(e) {
    e.preventDefault();
    dispatch(getOccupations());
  }

  // useEffect(() => {
  //   dispatch(getOccupations());
  // }, [dispatch]);

  //#region FORM
  async function handleChange(e, objKey) {
    setFormData({ ...formData, [objKey]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');

    // if (activeId) {
    //   try {
    //     await patchOccupation(activeId, formData);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     clear();
    //   }
    // } else {
    //   try {
    //     await postOccupation(formData);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     clear();
    //   }
    // }
  }
  //#endregion

  props = {
    ...props,
    activeId,
    setActiveId,
    formData,
    setFormData,
  };

  return (
    <Section padding="20vh 0 0 0">
      <Grid gap="2rem">
        <div>
          <Button padding="1rem" onClick={e => getMeMyData(e)}>
            setData
          </Button>
          <ObjectViewer title="activeId" data={activeId} />
          <ObjectViewer title="form" data={formData} />
          {/* <ObjectViewer title="data" data={occuData} /> */}
        </div>

        <div>
          {/* {occuData &&
            occuData.map((o, i) =>
              React.memo(
                <OccuCard
                  key={`${i}${o._id}`}
                  data={o}
                  onClick={() => setActiveId(o._id)}
                  onDelete={() => onClickDelete(o._id)}
                />,
              ),
            )} */}
        </div>

        <Form onSubmit={handleSubmit}>
          <Input
            label="category"
            value={formData.category}
            onChange={e => handleChange(e, 'category')}
          />
          <Input
            label="short"
            value={formData.short}
            onChange={e => handleChange(e, 'short')}
          />
          <Input
            label="employer"
            value={formData.employer}
            onChange={e => handleChange(e, 'employer')}
          />
          <Input
            label="category"
            value={formData.title}
            onChange={e => handleChange(e, 'title')}
          />
          <Input
            label="category"
            value={formData.country}
            onChange={e => handleChange(e, 'country')}
          />
          <Input
            label="category"
            value={formData.category}
            onChange={e => handleChange(e, 'category')}
          />
          <Input
            label="to"
            value={formData.to}
            onChange={e => handleChange(e, 'to')}
          />
          <Input
            label="descr"
            value={formData.descr}
            onChange={e => handleChange(e, 'descr')}
          />
          <Textarea
            label="descr"
            value={formData.descr}
            onChange={e => handleChange(e, 'descr')}
          />
          <Button onClick={handleSubmit}>
            {activeId ? 'Update' : 'Create new'}
          </Button>
        </Form>
      </Grid>
    </Section>
  );
}

const OccuCard = ({ data, onClick, onDelete }) => {
  return (
    <>
      <Button onClick={onDelete}>delete {data._id}</Button>
      <div className="occucard" onClick={onClick}>
        <p className="sc">{data._id}</p>
        <p>{data.category}</p>
        <p>{data.short}</p>
        <p>{data.employer}</p>
        <p>{data.title}</p>
        <p>{data.location}</p>
        <p>{data.country}</p>
        <p>{data.descr}</p>
        <p>{data.from}</p>
        <p>{data.to}</p>
      </div>

      <style jsx>
        {`
          .occucard {
            border: thin solid;
            padding: 1rem;
            margin: 0.5rem 10vw;

            background: transparent;
            transition: 0.2s ease;
          }

          .occucard:hover {
            cursor: pointer;
            background: rgba(100, 50, 50, 0.1);
          }
        `}
      </style>
    </>
  );
};

const initData = {
  _id: '',
  category: '',
  short: '',
  //
  employer: '',
  title: '',
  location: '',
  country: '',
  //
  tags: [''],
  descr: ``,
  //
  from: '',
  to: '',
};
