# remi-track

> Nombre de trabajo. El nombre comercial se define antes de publicar.

App móvil para registrar entrenamiento de hipertrofia y fuerza en el gym, con gráficas de progreso y resúmenes generados con IA. Funciona sin conexión.

Solo es seguimiento de datos. No es consejería médica ni nutricional.

## Stack

- React Native + Expo + TypeScript
- SQLite (almacenamiento local, offline-first)
- Gemini API (resúmenes, solo con totales agregados)
- react-native-chart-kit (gráficas)

## Alcance MVP

- Registro de series: peso y repeticiones por serie
- Avance semanal y mensual por ejercicio
- Gráficas de progreso
- Alertas básicas: sobrecarga y descanso menor a 48 h
- Resumen con Gemini

Fuera del MVP: login con Gmail, sincronización multi-dispositivo, sueño y fatiga.

## Documentación

- [Requisitos](./docs/REQUIREMENTS.md)
- [Arquitectura](./docs/ARCHITECTURE.md)

## Estado

- [x] Requisitos documentados
- [ ] Setup del proyecto
- [ ] Modelo de datos en SQLite
- [ ] Registro de series
- [ ] Gráficas
- [ ] Resúmenes con Gemini

## Configuración

1. Copia `.env.example` a `.env`.
2. Agrega tu `GEMINI_API_KEY` en `.env`.
3. No subas `.env` al repositorio.