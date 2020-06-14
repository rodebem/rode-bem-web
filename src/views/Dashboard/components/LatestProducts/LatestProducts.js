import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/Star';

import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: '#FFBB19',
    marginRight: 10
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, avaliation, percent, ...rest } = props;

  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Avaliação média dos restaurantes"
      />
      <Divider />
      <CardContent className={classes.content}>
        <MoreVertIcon className={classes.icon} /> 
        <Typography variant="h3">
          {avaliation}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Typography>
          {percent}% desde o ultimo mês
        </Typography>
      </CardActions>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
