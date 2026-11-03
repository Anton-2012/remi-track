# ADR-004: Exportación de datos pospuesta a la versión 1.0.1

**Estado:** Aceptado
**Fecha:** 2 nov 2026

## Contexto
La exportación e importación entre teléfonos resuelve la pérdida de datos al cambiar de dispositivo, pero agrega formato de archivo, reglas de fusión y advertencias de privacidad. La beta necesita enfocarse en el registro y en las gráficas.

## Decisión
La exportación queda fuera de la beta y se planea para la versión 1.0.1.

## Consecuencias
- Positivo: la beta tiene menos superficie de prueba y se entrega antes.
- Negativo: un tester que cambie de teléfono pierde su historial. Esto se advierte en el primer uso.
- Mitigación: los IDs en UUID (ADR-003) permiten añadir la exportación sin migrar la base.