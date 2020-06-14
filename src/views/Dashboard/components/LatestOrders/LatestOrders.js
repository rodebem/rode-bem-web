import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';
import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Incidentes Reportados"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Número de Protocolo</TableCell>
                  <TableCell>Problema</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Localização
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  hover
                >
                  <TableCell>#OF364757</TableCell>
                  <TableCell>Buraco na rodovia bandeirantes</TableCell>
                  <TableCell>-4.82642, 52.78263</TableCell>
                  <TableCell>
                    <Button color="primary">Ver detalhes</Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  hover
                >
                  <TableCell>#OF455456</TableCell>
                  <TableCell>Acidente na rodovia paulista</TableCell>
                  <TableCell>-4.123642, 51.12263</TableCell>
                  <TableCell>
                    <Button color="primary">Ver detalhes</Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  hover
                >
                  <TableCell>#OF54875</TableCell>
                  <TableCell>Alerta de segurança emitido</TableCell>
                  <TableCell>-4.31234, 54.73476</TableCell>
                  <TableCell>
                    <Button color="primary">Ver detalhes</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Ver relatórios <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
