# ADR-005: Resúmenes con IA fuera de la beta

**Estado:** Aceptado
**Fecha:** 2 nov 2026

## Contexto
Los resúmenes con Gemini requieren enviar datos fuera del teléfono, consentimiento explícito, un proxy para proteger la API key y un control de costo por cuota. Cada uno de esos puntos es trabajo que no aporta a la beta.

## Decisión
Los resúmenes con Gemini pasan a la versión 1.1. En la beta, ningún dato sale del teléfono.

## Consecuencias
- Positivo: la beta no tiene llamadas externas, no necesita proxy ni pantalla de consentimiento, y no genera costo.
- Negativo: la beta no muestra la parte de IA, que es un diferenciador del producto.
- Mitigación: la versión 1.1 debe incluir el proxy, la cuota por tipo de resumen y el consentimiento desactivado por defecto, como se describe en el documento de requisitos.