# DragonBoard Data Model

Version : 1.0

Status : Draft

---

# Purpose

This document defines every core object used by DragonBoard.

It acts as the contract between every module inside the application.

No module may redefine these objects.

If this document changes after Design Freeze, a new RFC must be created.

---

# Domain Overview

```
Campaign
│
├── Maps
│     ├── Fog
│     └── Tokens
│
├── Journal
│
├── Assets
│
└── Settings


GameState
│
├── Current Campaign
├── Current Map
├── Camera
├── Selected Token
└── Round
```

---

# Campaign

## Purpose

Campaign is the highest level container.

Every object inside DragonBoard belongs to one Campaign.

Deleting a Campaign removes every child object.

---

## Owns

* Maps
* Journal
* Assets
* Settings

---

## Metadata

| Field       | Description                |
| ----------- | -------------------------- |
| id          | Unique campaign identifier |
| name        | Campaign name              |
| author      | Campaign creator           |
| version     | Data version               |
| createdAt   | Creation date              |
| updatedAt   | Last modification          |
| description | Optional description       |

---

# Map

## Purpose

Represents one playable battle map.

One Campaign may contain multiple Maps.

Only one Map can be active at a time.

---

## Owns

* Fog
* Tokens

---

## Metadata

| Field       | Description           |
| ----------- | --------------------- |
| id          | Unique map identifier |
| name        | Map name              |
| image       | Map image             |
| width       | Original image width  |
| height      | Original image height |
| gridSize    | Grid size             |
| gridEnabled | Grid visibility       |
| createdAt   | Creation date         |
| updatedAt   | Last modification     |

---

# Token

## Purpose

Represents anything placed on a Map.

A Token is NOT a Character.

It may represent:

* Player
* NPC
* Monster
* Object
* Vehicle
* Marker

---

## Metadata

| Field      | Description                 |
| ---------- | --------------------------- |
| id         | Unique token identifier     |
| name       | Display name                |
| type       | Token category              |
| image      | Token image                 |
| hp         | Current hit points          |
| maxHp      | Maximum hit points          |
| positionX  | X coordinate                |
| positionY  | Y coordinate                |
| rotation   | Rotation angle              |
| scale      | Display scale               |
| visible    | Visibility state            |
| locked     | Prevent accidental movement |
| conditions | Active condition list       |

---

# Fog

## Purpose

Stores explored and unexplored areas for one Map.

Fog belongs to a Map.

Fog never exists independently.

---

## Metadata

| Field         | Description           |
| ------------- | --------------------- |
| id            | Unique fog identifier |
| revealedAreas | Revealed regions      |
| hiddenAreas   | Hidden regions        |
| updatedAt     | Last modification     |

---

# Journal

## Purpose

Stores campaign notes.

Journal entries are independent from Maps.

---

## Metadata

| Field     | Description       |
| --------- | ----------------- |
| id        | Entry identifier  |
| title     | Entry title       |
| content   | Rich text content |
| createdAt | Creation date     |
| updatedAt | Last modification |

---

# Assets

## Purpose

Stores every imported resource.

Assets are reusable.

The same Asset may be used by multiple Maps or Tokens.

---

## Metadata

| Field     | Description                |
| --------- | -------------------------- |
| id        | Asset identifier           |
| type      | Map / Token / Icon / Image |
| filename  | Original filename          |
| path      | Storage path               |
| createdAt | Upload date                |

---

# Settings

## Purpose

Stores campaign preferences.

Settings affect the Campaign only.

---

## Metadata

| Field           | Description           |
| --------------- | --------------------- |
| gridEnabled     | Show grid             |
| fogEnabled      | Enable fog            |
| snapToGrid      | Snap movement         |
| playerCanMove   | Allow player movement |
| measurementUnit | Distance unit         |
| theme           | UI theme              |

---

# GameState

## Purpose

Represents the current runtime state.

GameState is temporary.

GameState changes continuously during play.

GameState is not the Campaign itself.

---

## Contains

| Field           | Description          |
| --------------- | -------------------- |
| currentCampaign | Active campaign      |
| currentMap      | Active map           |
| selectedToken   | Selected token       |
| camera          | Current camera       |
| currentRound    | Current combat round |
| gmMode          | GM mode enabled      |

---

# Camera

## Purpose

Represents current viewport.

---

## Metadata

| Field   | Description         |
| ------- | ------------------- |
| zoom    | Zoom level          |
| offsetX | Horizontal position |
| offsetY | Vertical position   |

---

# Condition

## Purpose

Represents temporary status attached to a Token.

Conditions never exist independently.

---

## Metadata

| Field | Description          |
| ----- | -------------------- |
| id    | Condition identifier |
| name  | Condition name       |
| icon  | UI icon              |

---

# Relationships

Campaign

1 → Many Maps

Campaign

1 → Many Journal Entries

Campaign

1 → One Settings

Campaign

1 → Many Assets

Map

1 → One Fog

Map

1 → Many Tokens

Token

1 → Many Conditions

GameState

1 → One Campaign

GameState

1 → One Map

GameState

1 → One Camera

GameState

0..1 → One Selected Token

---

# Design Decisions

* HP belongs to Token.
* Position belongs to Token.
* Fog belongs to Map.
* Character is intentionally omitted.
* Every object belongs to a Campaign.
* GameState stores runtime data only.
* Static data must not be stored inside GameState.

---

# Future Extension

The following objects may be introduced after Version 1.0 without changing the existing model.

* Character Sheet
* Encounter
* Music
* Dice Log
* Initiative Tracker
* Handout
* Export Package
* Import Package

No existing object should require structural changes when these extensions are added.
