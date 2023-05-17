import { Text, Title } from "@mantine/core";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <Title order={1}>Gastles State Management</Title>
      <Text fz="xs" c="dimmed" mt="sm" mb="sm">
        Studio Hyperdrive - Denis Valcke & Jo Smets
      </Text>
      <Text mt="60px">
        Deze voorbeeldapplicatie bevat een Art-pagina die kunstwerken gaat
        ophalen van een{" "}
        <a href="https://api.artic.edu/docs/#introduction">publieke API</a>.
        Onderaan de pagina staat een knop om meer kunstwerken in te laden. Bij
        het klikken op een resultaat word je doorverwezen naar een detail
        pagina.
      </Text>
      <Text mt="30px">
        Het ophalen en bewaren van data in de store doen we aan de hand van{" "}
        <a href="https://react-redux.js.org/">React Redux</a> en{" "}
        <a href="https://redux-toolkit.js.org/">React Redux Toolkit</a>.
      </Text>
      <Text mt="30px">
        Ga zelf aan de slag om het Exhibitions overzicht en detail verder uit te
        werken, gelijkaardig aan de Art pagina&apos;s. Gebruik op de
        overzichtspagina een tabel (beschikbaar in mantine) met de titel,
        status, startdatum en einddatum van de exhibitions. Onderdaan de pagina
        bevindt zich een &quot;laad meer&quot;-knop. Op de tabel kan je
        doorklikken om naar het detail van een exhibition te gaan. Op de
        detailpagina toon je buiten de titel, status, start- en einddatum ook de
        afbeelding en de beschrijving van de exhibition.
      </Text>
      <Text mt="30px">
        In grote lijnen dienen volgende stappen ondernomen te worden:{" "}
      </Text>
      <ul>
        <li>Opzetten exhibitions module</li>
        <li>
          Exhibitions overzicht en detail routing en pagina&apos;s voorzien
        </li>
        <li>Exhibitions slice voorzien</li>
        <li>(Async) actions/thunks en reducers voorzien</li>
        <li>Actions dispatchen</li>
        <li>Data uit store renderen in views</li>
      </ul>
      <Text mt="30px">Veel succes!</Text>
    </>
  );
};
