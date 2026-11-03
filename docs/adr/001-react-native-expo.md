# ADR-001: React Native con Expo

**Estado:** Aceptado
**Fecha:** 2 nov 2026

## Contexto
La app debe usarse en el gimnasio con el teléfono en la mano, así que tiene que ser una app móvil y no una web. Quien desarrolla conoce JavaScript y tiene poca experiencia con React.

## Decisión
Usar React Native con Expo y TypeScript. Expo reduce la configuración nativa y permite generar APK e instalables sin tocar Xcode ni Android Studio al inicio.

## Consecuencias
- Positivo: una base de código para iOS y Android, y un flujo de build más simple.
- Negativo: hay que aprender React además de React Native, y Expo impone algunas limitaciones en librerías nativas.
- Alternativas descartadas: web app o PWA, porque el uso en el gimnasio exige una app instalable y con buena respuesta offline. Flutter, porque implicaba aprender Dart además del resto del stack.