import React, { Component } from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const TherapistTableCard = () => {
  const therapistList = [
    {
      imgUrl: "/assets/images/faces/2.jpg",
      name: "Jorge Benitez",
      price: 100,
      available: 15
    },
    {
      imgUrl: "/assets/images/faces/4.jpg",
      name: "Sonia Benavides",
      price: 1500,
      available: 30
    },
    {
      imgUrl: "/assets/images/faces/13.jpg",
      name: "Mario Squivias",
      price: 1900,
      available: 35
    },
    {
      imgUrl: "/assets/images/faces/12.jpg",
      name: "Alma Gomez",
      price: 100,
      available: 0
    },
    {
      imgUrl: "/assets/images/faces/15.jpg",
      name: "Pablo Enriquez",
      price: 1190,
      available: 5
    }
  ];

  return (
    <Card elevation={3} className="pt-20 mb-24">
      <div className="card-title px-24 mb-12">Top terapeutas</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-24" colSpan={4}>
                Nombre
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Precio/Sesión
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Disponibilidad
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Detalles
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {therapistList.map((thera, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={4} align="left">
                  <div className="flex flex-middle">
                    <img
                      className="circular-image-small"
                      src={thera.imgUrl}
                      alt="user"
                    />
                    <p className="m-0 ml-8">{thera.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  $
                  {thera.price > 999
                    ? (thera.price / 1000).toFixed(1) + "k"
                    : thera.price}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={2}>
                  {thera.available ? (
                    thera.available < 20 ? (
                      <small className="border-radius-4 bg-secondary text-white px-8 py-2 ">
                        {thera.available} dias
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-primary text-white px-8 py-2 ">
                        disponible
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-8 py-2 ">
                      ocupado
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  <IconButton>
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TherapistTableCard;