# ADR-002: SQLite sin sincronización en la beta

**Estado:** Aceptado
**Fecha:** 2 nov 2026

## Contexto
La app debe funcionar sin conexión en el gimnasio. Sincronizar datos entre dispositivos agrega autenticación, manejo de conflictos y costo de backend, y nada de eso aporta valor en la beta.

## Decisión
Guardar todos los datos en SQLite local. No hay login ni sincronización en la beta.

## Consecuencias
- Positivo: menos piezas, menos costo, y privacidad por defecto porque los datos no salen del teléfono.
- Negativo: si el usuario cambia de teléfono o desinstala la app, pierde su historial. Esto se advierte en el primer uso.
- Alternativa descartada: Firestore con caché offline. Su soporte en React Native es limitado y no lo validamos todavía.