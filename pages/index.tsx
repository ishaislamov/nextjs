import { Button, Htag, Ptag, Rating, Tag } from '../components';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0)
  return (
    <>
      <Htag tag='h1'>Some text</Htag>
      <Button appearance='primary' arrow='down'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <Ptag size='p18'>Some P-text</Ptag>
      <Ptag size='p16'>Some P-text</Ptag>
      <Ptag size='p14'>Some P-text</Ptag>
      <Tag size="s" color='red'> Hello world</Tag>
      <Tag size="s" color='green'> Hello world</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);