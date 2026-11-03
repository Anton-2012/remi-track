# ADR-003: IDs en UUID

**Estado:** Aceptado
**Fecha:** 2 nov 2026

## Contexto
Los registros se crean en un solo teléfono hoy, pero en el futuro podrían exportarse e importarse entre dispositivos. Con enteros autoincrementales, dos teléfonos generan el mismo `id` y la importación choca.

## Decisión
Usar UUID como clave primaria en `sessions`, `exercises` y `series`.

## Consecuencias
- Positivo: los registros son únicos en cualquier dispositivo, y la exportación futura no requiere migrar la base.
- Negativo: los UUID ocupan más espacio y no son legibles a simple vista.
- Alternativa descartada: enteros autoincrementales. Son más simples, pero obligan a migrar la base cuando llegue la exportación.