window.KERN_V12 = {
  "version": 1,
  "variant": "v12",
  "title": "KERN · Compact functional revision",
  "units": "metres",
  "geometryVersion": 6,
  "floors": {
    "L3": {
      "name": "Observation deck · radar maintenance",
      "z": 17.4,
      "elevation": "+17.40 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight"
        },
        {
          "id": "stairlanding",
          "name": "Roof stair landing",
          "x": 8,
          "y": 10,
          "w": 10,
          "h": 3,
          "type": "circulation",
          "outdoor": true
        },
        {
          "id": "observation",
          "name": "Observation deck",
          "x": 12,
          "y": 0,
          "w": 10,
          "h": 10,
          "type": "terrace",
          "outdoor": true
        },
        {
          "id": "radar",
          "name": "Radar / dish maintenance",
          "x": 22,
          "y": 0,
          "w": 10,
          "h": 10,
          "type": "terrace",
          "outdoor": true
        },
        {
          "id": "roofpath",
          "name": "Guarded freight service walk",
          "x": 14,
          "y": 13,
          "w": 4,
          "h": 13,
          "type": "circulation",
          "outdoor": true
        },
        {
          "id": "liftlobby",
          "name": "Roof freight lobby",
          "x": 14,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "circulation"
        },
        {
          "id": "sky",
          "name": "COURTYARD / OPEN SKY",
          "x": 18,
          "y": 10,
          "w": 10,
          "h": 10,
          "type": "void",
          "courtyardVoid": true,
          "locked": true,
          "linkedSource": {
            "floor": "L0",
            "room": "courtyard"
          },
          "derived": true
        }
      ],
      "doors": [
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_observation",
          "a": "stairlanding",
          "b": "observation",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "observation_radar",
          "a": "observation",
          "b": "radar",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "stairlanding_roofpath",
          "a": "stairlanding",
          "b": "roofpath",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "roofpath_liftlobby",
          "a": "roofpath",
          "b": "liftlobby",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "liftlobby_freight",
          "a": "liftlobby",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair",
        "freight"
      ],
      "note": "Observation / radar deck remains outdoors. The user-designated circulation paths retain outdoor access while the L3 enclosure decision is open. Freight and NW stair align with the lower levels; no bridge spans the courtyard.",
      "symbols": [],
      "services": []
    },
    "L2": {
      "name": "Concealed concrete level",
      "z": 11.6,
      "elevation": "+11.60 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Freight shaft · no L2 stop",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT SHAFT\nNO L2 STOP",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight",
          "throughOnly": true,
          "access": "no-floor-access"
        },
        {
          "id": "stairlanding",
          "name": "L2 stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 3,
          "type": "circulation",
          "diagramLabel": "STAIR\nLANDING"
        },
        {
          "id": "roofpath",
          "name": "Concealed concrete",
          "x": 14,
          "y": 13,
          "w": 4,
          "h": 13,
          "type": "solid",
          "sealedConcrete": true,
          "program": false,
          "outdoor": false,
          "diagramLabel": ""
        },
        {
          "id": "liftlobby",
          "name": "Concealed concrete",
          "x": 14,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "solid",
          "sealedConcrete": true,
          "program": false,
          "outdoor": false,
          "diagramLabel": ""
        },
        {
          "id": "pathturn",
          "name": "Concealed concrete",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 3,
          "type": "solid",
          "sealedConcrete": true,
          "program": false,
          "outdoor": false,
          "diagramLabel": ""
        },
        {
          "id": "plant",
          "name": "Concealed concrete",
          "x": 12,
          "y": 2,
          "w": 6,
          "h": 8,
          "type": "solid",
          "sealedConcrete": true,
          "program": false,
          "outdoor": false,
          "diagramLabel": "SEALED\nCONCRETE"
        },
        {
          "id": "opsroof",
          "name": "Concealed concrete",
          "x": 18,
          "y": 0,
          "w": 14,
          "h": 10,
          "type": "solid",
          "outdoor": false,
          "linkedSource": {
            "floor": "L0",
            "room": "control"
          },
          "derivedFootprint": true,
          "sealedConcrete": true,
          "program": false,
          "diagramLabel": "SEALED\nCONCRETE"
        },
        {
          "id": "sky",
          "name": "COURTYARD / OPEN SKY",
          "x": 18,
          "y": 10,
          "w": 10,
          "h": 10,
          "type": "void",
          "courtyardVoid": true,
          "locked": true,
          "linkedSource": {
            "floor": "L0",
            "room": "courtyard"
          },
          "derived": true
        }
      ],
      "doors": [
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_plant",
          "a": "stairlanding",
          "b": "plant",
          "width": 1.2,
          "offset": 0.5,
          "sealed": true,
          "cemented": true,
          "material": "concrete infill",
          "label": "CEMENTED SHUT",
          "kind": "door"
        }
      ],
      "entrances": [
        "stair"
      ],
      "note": "Only the NW stair and its small landing are in use. The former doorway beyond the landing is cemented shut. The rest of this level is concealed concrete, not terrace, maintenance space or normal circulation. The NW stair continues through to the L3 observation roof. The freight shaft passes through without an L2 stop. L1 and L3 remain unchanged.",
      "symbols": [],
      "services": []
    },
    "L1": {
      "name": "Crew quarters · boarded listening suite",
      "z": 5.8,
      "elevation": "+5.80 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight"
        },
        {
          "id": "sky",
          "name": "OPEN SKY COURT",
          "x": 18,
          "y": 10,
          "w": 10,
          "h": 10,
          "type": "void",
          "locked": true,
          "courtyardVoid": true,
          "linkedSource": {
            "floor": "L0",
            "room": "courtyard"
          },
          "derived": true
        },
        {
          "id": "void",
          "name": "VOID TO OPERATIONS BELOW",
          "x": 18,
          "y": 0,
          "w": 14,
          "h": 10,
          "type": "void",
          "locked": true,
          "diagramLabel": "OPERATIONS VOID\nNO L1 FLOOR",
          "linkedSource": {
            "floor": "L0",
            "room": "control"
          },
          "derived": true
        },
        {
          "id": "stairlanding",
          "name": "Stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 2,
          "type": "circulation"
        },
        {
          "id": "sleepa",
          "name": "Sleeping A",
          "x": 8,
          "y": 12,
          "w": 6,
          "h": 5,
          "type": "living"
        },
        {
          "id": "sleepb",
          "name": "Sleeping B",
          "x": 8,
          "y": 17,
          "w": 6,
          "h": 6,
          "type": "living"
        },
        {
          "id": "westhall",
          "name": "Quiet hall / freight return",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 22,
          "type": "circulation"
        },
        {
          "id": "overlook",
          "name": "Operations overlook",
          "x": 14,
          "y": 7,
          "w": 4,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "bath",
          "name": "Showers / WC",
          "x": 18,
          "y": 20,
          "w": 8,
          "h": 3,
          "type": "service"
        },
        {
          "id": "southlink",
          "name": "Common return",
          "x": 18,
          "y": 23,
          "w": 4,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "common",
          "name": "Kitchen / common",
          "x": 22,
          "y": 23,
          "w": 10,
          "h": 9,
          "type": "living"
        },
        {
          "id": "eastreturn",
          "name": "East return",
          "x": 26,
          "y": 20,
          "w": 10,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "terrace",
          "name": "South roof terrace",
          "x": 32,
          "y": 23,
          "w": 12,
          "h": 9,
          "type": "terrace",
          "outdoor": true
        },
        {
          "id": "listening",
          "name": "02 · Boarded listening booth",
          "x": 28,
          "y": 10,
          "w": 8,
          "h": 6,
          "type": "secret",
          "boardedSection": "02"
        },
        {
          "id": "tapes",
          "name": "02 · Sealed tape records",
          "x": 28,
          "y": 16,
          "w": 8,
          "h": 4,
          "type": "secret",
          "boardedSection": "02"
        }
      ],
      "doors": [
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_westhall",
          "a": "stairlanding",
          "b": "westhall",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_overlook",
          "a": "westhall",
          "b": "overlook",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_sleepa",
          "a": "westhall",
          "b": "sleepa",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westhall_sleepb",
          "a": "westhall",
          "b": "sleepb",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westhall_southlink",
          "a": "westhall",
          "b": "southlink",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_freight",
          "a": "westhall",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "southlink_common",
          "a": "southlink",
          "b": "common",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "southlink_bath",
          "a": "southlink",
          "b": "bath",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "common_eastreturn",
          "a": "common",
          "b": "eastreturn",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "common_terrace",
          "a": "common",
          "b": "terrace",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "eastreturn_tapes",
          "a": "eastreturn",
          "b": "tapes",
          "width": 1.2,
          "offset": 0.5,
          "sealed": true,
          "boarded": true,
          "label": "BOARDED 02"
        },
        {
          "id": "tapes_listening",
          "a": "tapes",
          "b": "listening",
          "width": 1.2,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair",
        "freight"
      ],
      "note": "Your enlarged 8 m-wide showers/WC and adjusted east return are retained. Operations remains a full L1 void; the 80 m² boarded listening suite and living areas retain 4 m occupied height plus separate 1.5 m service clearance.",
      "symbols": [],
      "services": []
    },
    "L0": {
      "name": "Main floor · double-height Operations",
      "z": 0,
      "elevation": "+0.00 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight"
        },
        {
          "id": "courtyard",
          "name": "OPEN SKY / GRASS COURT",
          "x": 18,
          "y": 10,
          "w": 10,
          "h": 10,
          "type": "courtyard",
          "locked": true,
          "outdoor": true,
          "permeable": true
        },
        {
          "id": "control",
          "name": "Operations",
          "x": 18,
          "y": 0,
          "w": 14,
          "h": 10,
          "type": "tech",
          "height": 9.799999999999999,
          "diagramLabel": "OPERATIONS HALL\n9.8 m CLEAR"
        },
        {
          "id": "archive",
          "name": "Archive / reading",
          "x": 8,
          "y": 12,
          "w": 6,
          "h": 8,
          "type": "tech"
        },
        {
          "id": "northlink",
          "name": "Operations return",
          "x": 14,
          "y": 7,
          "w": 4,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "westhall",
          "name": "West passage",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 22,
          "type": "circulation"
        },
        {
          "id": "courtleg",
          "name": "Court passage",
          "x": 18,
          "y": 20,
          "w": 10,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "corelink",
          "name": "Core junction",
          "x": 28,
          "y": 17.5,
          "w": 4,
          "h": 4.5,
          "type": "circulation"
        },
        {
          "id": "eastleg",
          "name": "Arrival return",
          "x": 32,
          "y": 13,
          "w": 4,
          "h": 9,
          "type": "circulation"
        },
        {
          "id": "reception",
          "name": "Reception / security",
          "x": 28,
          "y": 10,
          "w": 4,
          "h": 7.5,
          "type": "tech"
        },
        {
          "id": "entry",
          "name": "Entry",
          "x": 40,
          "y": 10,
          "w": 4,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "issue",
          "name": "Crew briefing / ready room",
          "x": 6,
          "y": 23,
          "w": 8,
          "h": 9,
          "type": "service",
          "programNote": "Bulk equipment issue and tool storage moved to B1. No furniture placed."
        },
        {
          "id": "wc",
          "name": "WC",
          "x": 8,
          "y": 20,
          "w": 6,
          "h": 3,
          "type": "service"
        },
        {
          "id": "survey",
          "name": "Field preparation / survey",
          "x": 36,
          "y": 22,
          "w": 8,
          "h": 8,
          "type": "service",
          "outsideOnly": true,
          "programNote": "Outside field preparation access retained; supplies and spares stored in B1."
        },
        {
          "id": "entryleg",
          "name": "Arrival turn",
          "x": 40,
          "y": 13,
          "w": 4,
          "h": 5,
          "type": "circulation"
        },
        {
          "id": "entryelbow",
          "name": "",
          "x": 36,
          "y": 16,
          "w": 4,
          "h": 2,
          "type": "circulation",
          "diagramLabel": ""
        },
        {
          "id": "stairlanding",
          "name": "Main stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 2,
          "type": "circulation"
        },
        {
          "id": "cargoturn",
          "name": "Cargo corridor turn",
          "x": 18,
          "y": 23,
          "w": 6,
          "h": 3,
          "type": "circulation"
        }
      ],
      "doors": [
        {
          "id": "northlink_westhall",
          "a": "northlink",
          "b": "westhall",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "courtleg_corelink",
          "a": "courtleg",
          "b": "corelink",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "corelink_eastleg",
          "a": "corelink",
          "b": "eastleg",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "reception_eastleg",
          "a": "reception",
          "b": "eastleg",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "control_northlink",
          "a": "control",
          "b": "northlink",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "westhall_archive",
          "a": "westhall",
          "b": "archive",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "courtleg_courtyard",
          "a": "courtleg",
          "b": "courtyard",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "entry_entryleg",
          "a": "entry",
          "b": "entryleg",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "entryleg_entryelbow",
          "a": "entryleg",
          "b": "entryelbow",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "entryelbow_eastleg",
          "a": "entryelbow",
          "b": "eastleg",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_westhall",
          "a": "stairlanding",
          "b": "westhall",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_wc",
          "a": "westhall",
          "b": "wc",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westhall_issue",
          "a": "westhall",
          "b": "issue",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "westhall_freight",
          "a": "westhall",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "westhall_courtleg",
          "a": "westhall",
          "b": "courtleg",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_cargoturn",
          "a": "westhall",
          "b": "cargoturn",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "courtleg_cargoturn",
          "a": "courtleg",
          "b": "cargoturn",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        }
      ],
      "entrances": [
        "entry",
        "survey"
      ],
      "note": "Your continuous West Passage is retained, with direct stair, WC, equipment and full-width freight access. The detached former West Turn and Freight Passage fragments are removed. The larger reception, bent east arrival, west-only Operations entry, double-height Operations and open-sky court are retained.",
      "externals": [
        {
          "room": "entry",
          "side": "e",
          "width": 1.8,
          "label": "MAIN ENTRY"
        },
        {
          "room": "survey",
          "side": "e",
          "width": 1.5,
          "label": "FIELD ACCESS"
        }
      ],
      "symbols": [],
      "services": []
    },
    "B1": {
      "name": "Dropped garage · clean stair return",
      "z": -5.8,
      "elevation": "Lobby -5.80 / garage -9.80 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "z": -9.8,
          "editGroup": "freight"
        },
        {
          "id": "garage",
          "name": "Garage / expedition bay",
          "x": 6,
          "y": 18,
          "w": 12,
          "h": 18,
          "type": "service",
          "garagePart": true,
          "diagramLabel": "GARAGE / EXPEDITION BAY\n8 m CLEAR",
          "z": -9.8,
          "height": 8
        },
        {
          "id": "garagewide",
          "name": "Loading / maneuvering",
          "x": 18,
          "y": 18,
          "w": 13.5,
          "h": 8,
          "type": "service",
          "garagePart": true,
          "z": -9.8,
          "height": 8,
          "diagramLabel": "LOADING / MANEUVERING\n8 m CLEAR"
        },
        {
          "id": "maps",
          "name": "01 · Old map room",
          "x": 37.5,
          "y": 3,
          "w": 12,
          "h": 10,
          "type": "secret",
          "boardedSection": "01",
          "z": -9.8,
          "height": 4,
          "ceilingZ": -5.800000000000001,
          "serviceClear": 1.5,
          "overheadVoid": true
        },
        {
          "id": "signal",
          "name": "01 · Signal vault",
          "x": 24,
          "y": 10,
          "w": 13.5,
          "h": 8,
          "type": "secret",
          "boardedSection": "01",
          "z": -9.8,
          "height": 4,
          "ceilingZ": -5.800000000000001,
          "serviceClear": 1.5,
          "overheadVoid": true
        },
        {
          "id": "secretreturn",
          "name": "01 · Former research return",
          "x": 18,
          "y": 6,
          "w": 19.5,
          "h": 4,
          "type": "secret",
          "boardedSection": "01",
          "z": -9.8,
          "height": 4,
          "ceilingZ": -5.800000000000001,
          "serviceClear": 1.5,
          "overheadVoid": true
        },
        {
          "id": "stairlanding",
          "name": "Clean B1 stair lobby",
          "x": 12,
          "y": 2,
          "w": 6,
          "h": 8,
          "type": "circulation",
          "diagramLabel": "CLEAN LOBBY\n-5.80 m"
        },
        {
          "id": "transferstair",
          "name": "Clean transfer stair · 4 m rise",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 8,
          "type": "core",
          "z": -9.8,
          "locked": true,
          "stairTransition": true,
          "upperZ": -5.8,
          "lowerZ": -9.8,
          "diagramLabel": "CLEAN STAIR\nUP 4.0 m",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom."
        },
        {
          "id": "gown",
          "name": "Clean gowning / return",
          "x": 18,
          "y": 10,
          "w": 6,
          "h": 4,
          "type": "service",
          "z": -9.8
        },
        {
          "id": "wash",
          "name": "Return wash / dirty threshold",
          "x": 18,
          "y": 14,
          "w": 6,
          "h": 4,
          "type": "service",
          "z": -9.8
        },
        {
          "id": "artifactstair",
          "name": "Dedicated artifact stair",
          "x": 18,
          "y": 32,
          "w": 8,
          "h": 4,
          "type": "core",
          "z": -9.8,
          "locked": false,
          "diagramLabel": "ARTIFACT STAIR\nDOWN TO B2",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "runAxis": "x",
          "landingEnd": "west",
          "editGroup": "artifact-stair"
        },
        {
          "id": "equipment",
          "name": "Equipment issue / tool storage",
          "x": 31.5,
          "y": 18,
          "w": 6,
          "h": 8,
          "type": "service",
          "z": -9.8,
          "height": 4
        },
        {
          "id": "fieldstore",
          "name": "Field supplies / spares",
          "x": 37.5,
          "y": 18,
          "w": 6,
          "h": 8,
          "type": "service",
          "z": -9.8,
          "height": 4
        },
        {
          "id": "medical",
          "name": "Medical scanner / exam",
          "x": 6,
          "y": 10,
          "w": 8,
          "h": 8,
          "type": "tech",
          "z": -9.8,
          "height": 4,
          "programNote": "Clean-side casualty access uses only the lower transfer landing at -9.80 m; no stair ascent. Scanner/exam equipment is unplaced."
        }
      ],
      "doors": [
        {
          "id": "garage_freight",
          "a": "garage",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "garage_garagewide",
          "a": "garage",
          "b": "garagewide",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "secretreturn_maps",
          "a": "secretreturn",
          "b": "maps",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "secretreturn_signal",
          "a": "secretreturn",
          "b": "signal",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 1
        },
        {
          "id": "stairlanding_transferstair",
          "a": "stairlanding",
          "b": "transferstair",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "gown_wash",
          "a": "gown",
          "b": "wash",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "wash_garagewide",
          "a": "wash",
          "b": "garagewide",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "garage_artifactstair",
          "a": "garage",
          "b": "artifactstair",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "transferstair_gown",
          "a": "transferstair",
          "b": "gown",
          "width": 1.2,
          "offset": 0
        },
        {
          "id": "garagewide_signal",
          "a": "garagewide",
          "b": "signal",
          "width": 1.5,
          "offset": 0.5,
          "sealed": true,
          "boarded": true,
          "label": "BOARDED 01"
        },
        {
          "id": "garagewide_equipment",
          "a": "garagewide",
          "b": "equipment",
          "width": 2,
          "offset": 0.5,
          "leaves": 2
        },
        {
          "id": "equipment_fieldstore",
          "a": "equipment",
          "b": "fieldstore",
          "width": 2,
          "offset": 0.5,
          "leaves": 2
        },
        {
          "id": "medical_transferstair",
          "a": "medical",
          "b": "transferstair",
          "width": 1.2,
          "offset": 0,
          "label": "CLEAN MEDICAL"
        }
      ],
      "entrances": [
        "stair",
        "garage"
      ],
      "note": "Compact revision: 324 m² garage/loading allowance; 96 m² mundane equipment and supply storage. Medical is at -9.80 m via the clean lower transfer landing after wash/gowning, without climbing to clean B1. Vehicle turning, door swings and traversal remain untested. Boarded story wing retained.",
      "garageArea": 420,
      "previousGarageArea": 204,
      "boardedArea": 306,
      "externals": [
        {
          "room": "garage",
          "side": "w",
          "width": 5,
          "label": "WEST VEHICLE APPROACH"
        }
      ],
      "garageClearHeight": 8,
      "garageZ": -9.8,
      "cleanLobbyZ": -5.8,
      "symbols": [],
      "services": []
    },
    "B2": {
      "name": "Artifact research · single corridor",
      "z": -15.6,
      "elevation": "-15.60 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight"
        },
        {
          "id": "intake",
          "name": "Artifact intake / scanner",
          "x": 22,
          "y": 22,
          "w": 10,
          "h": 10,
          "type": "tech"
        },
        {
          "id": "analysis",
          "name": "Artifact analysis station",
          "x": 18,
          "y": 12,
          "w": 18,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "artifact",
          "name": "Artifact store",
          "x": 36,
          "y": 12,
          "w": 8,
          "h": 10,
          "type": "tech"
        },
        {
          "id": "test",
          "name": "Test chamber",
          "x": 34,
          "y": 26,
          "w": 7,
          "h": 4,
          "type": "tech",
          "diagramLabel": "TEST CHAMBER"
        },
        {
          "id": "containment",
          "name": "Containment",
          "x": 34,
          "y": 22,
          "w": 10,
          "h": 4,
          "type": "tech",
          "programNote": "Separate containment access; not the route to the chamber or booth."
        },
        {
          "id": "decode",
          "name": "Decode / computing support",
          "x": 22,
          "y": 4,
          "w": 10,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "secure",
          "name": "Reference / research support",
          "x": 32,
          "y": 4,
          "w": 12,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "stairlanding",
          "name": "Main stair landing",
          "x": 12,
          "y": 2,
          "w": 6,
          "h": 8,
          "type": "circulation"
        },
        {
          "id": "westhall",
          "name": "Research corridor · west return",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 26,
          "type": "circulation",
          "diagramLabel": "RESEARCH\nCORRIDOR",
          "circulationGroup": "research"
        },
        {
          "id": "researchhall",
          "name": "Research corridor",
          "x": 18,
          "y": 18,
          "w": 18,
          "h": 4,
          "type": "circulation",
          "diagramLabel": "RESEARCH CORRIDOR",
          "circulationGroup": "research"
        },
        {
          "id": "artifactstair",
          "name": "Dedicated artifact stair",
          "x": 18,
          "y": 32,
          "w": 8,
          "h": 4,
          "type": "core",
          "locked": false,
          "diagramLabel": "ARTIFACT STAIR\nUP TO GARAGE",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "runAxis": "x",
          "landingEnd": "west",
          "editGroup": "artifact-stair"
        },
        {
          "id": "researchturn",
          "name": "Research corridor turn",
          "x": 18,
          "y": 22,
          "w": 4,
          "h": 4,
          "type": "circulation",
          "diagramLabel": "",
          "circulationGroup": "research"
        },
        {
          "id": "testaccess",
          "name": "Test suite access",
          "x": 32,
          "y": 22,
          "w": 2,
          "h": 10,
          "type": "circulation"
        },
        {
          "id": "observationaccess",
          "name": "Observation access",
          "x": 34,
          "y": 30,
          "w": 10,
          "h": 2,
          "type": "circulation",
          "diagramLabel": ""
        },
        {
          "id": "observation",
          "name": "Observation booth",
          "x": 41,
          "y": 26,
          "w": 3,
          "h": 4,
          "type": "tech",
          "observesRoom": "test",
          "programNote": "Independent entry from observation access; viewing interface is an unplaced allowance."
        },
        {
          "id": "supporthall",
          "name": "Research support passage",
          "x": 18,
          "y": 10,
          "w": 26,
          "h": 2,
          "type": "circulation",
          "diagramLabel": "RESEARCH SUPPORT"
        }
      ],
      "doors": [
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 1
        },
        {
          "id": "stairlanding_westhall",
          "a": "stairlanding",
          "b": "westhall",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_researchhall",
          "a": "westhall",
          "b": "researchhall",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_researchturn",
          "a": "westhall",
          "b": "researchturn",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "researchhall_researchturn",
          "a": "researchhall",
          "b": "researchturn",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westhall_freight",
          "a": "westhall",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "westhall_artifactstair",
          "a": "westhall",
          "b": "artifactstair",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "freight_intake",
          "a": "freight",
          "b": "intake",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "researchhall_intake",
          "a": "researchhall",
          "b": "intake",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "researchhall_analysis",
          "a": "researchhall",
          "b": "analysis",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "researchhall_artifact",
          "a": "researchhall",
          "b": "artifact",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "artifact_containment",
          "a": "artifact",
          "b": "containment",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "researchhall_testaccess",
          "a": "researchhall",
          "b": "testaccess",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "testaccess_containment",
          "a": "testaccess",
          "b": "containment",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "testaccess_test",
          "a": "testaccess",
          "b": "test",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "testaccess_observationaccess",
          "a": "testaccess",
          "b": "observationaccess",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "observationaccess_observation",
          "a": "observationaccess",
          "b": "observation",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westhall_supporthall",
          "a": "westhall",
          "b": "supporthall",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "supporthall_decode",
          "a": "supporthall",
          "b": "decode",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "supporthall_secure",
          "a": "supporthall",
          "b": "secure",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "supporthall_analysis",
          "a": "supporthall",
          "b": "analysis",
          "width": 1.5,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair",
        "freight",
        "artifactstair"
      ],
      "note": "Test chamber and 12 m² observation booth have independent access; containment stays separate. Decode and reference each open to an ordinary support passage. One provisional underfloor service bypass is available as a separate overlay.",
      "symbols": [],
      "services": [
        {
          "id": "planned-B2-crawl",
          "name": "Research service bypass",
          "kind": "crawlway",
          "points": [
            {
              "x": 16,
              "y": 12
            },
            {
              "x": 16,
              "y": 24
            }
          ],
          "width": 0.8,
          "clearHeight": 1.5,
          "z": -17.4,
          "location": "underfloor",
          "access": "player",
          "provisional": true,
          "runtimeTested": false
        }
      ]
    },
    "B3": {
      "name": "Maintenance · stabilization & old caves",
      "z": -21.4,
      "elevation": "-21.40 m",
      "clearHeight": 4,
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 2,
          "w": 4,
          "h": 8,
          "type": "core",
          "locked": true,
          "diagramLabel": "NW STAIR",
          "stairDetail": "Calculated from linked elevations and stairDesign parameters. See the stair inspector for actual flights, landings, required openings and conditional headroom.",
          "editGroup": "main-stair"
        },
        {
          "id": "freight",
          "name": "Full-height freight",
          "x": 18,
          "y": 26,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true,
          "diagramLabel": "FREIGHT",
          "liftDetail": "4 × 6 m shaft allowance; nominal 2.4 m cargo opening; actual car, pit, overhead and capacity require supplier coordination",
          "editGroup": "freight"
        },
        {
          "id": "stairlanding",
          "name": "NW stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 5,
          "type": "circulation"
        },
        {
          "id": "north",
          "name": "North maintenance gallery",
          "x": 14,
          "y": 12,
          "w": 34,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "west",
          "name": "West maintenance gallery",
          "x": 14,
          "y": 15,
          "w": 4,
          "h": 19,
          "type": "circulation"
        },
        {
          "id": "south",
          "name": "South maintenance gallery",
          "x": 22,
          "y": 31,
          "w": 26,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "east",
          "name": "East maintenance gallery",
          "x": 45,
          "y": 15,
          "w": 3,
          "h": 16,
          "type": "circulation"
        },
        {
          "id": "spine",
          "name": "Freight service return",
          "x": 22,
          "y": 26,
          "w": 4,
          "h": 5,
          "type": "circulation"
        },
        {
          "id": "plant",
          "name": "Maintenance / plant / electrical distribution",
          "x": 22,
          "y": 22,
          "w": 14,
          "h": 4,
          "type": "service",
          "diagramLabel": "PLANT / ELECTRICAL",
          "programNote": "Ordinary breaker distribution is reached through the unsealed freight-service return. Exciter and nodes retain their protection role. Panels are unplaced."
        },
        {
          "id": "exciter",
          "name": "Central exciter",
          "x": 28,
          "y": 15,
          "w": 8,
          "h": 7,
          "type": "tech"
        },
        {
          "id": "n1",
          "name": "Node 01",
          "x": 20,
          "y": 6,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "n2",
          "name": "Node 02",
          "x": 39,
          "y": 6,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "n3",
          "name": "Node 03",
          "x": 48,
          "y": 18,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "n4",
          "name": "Node 04",
          "x": 39,
          "y": 34,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "n5",
          "name": "Node 05",
          "x": 20,
          "y": 34,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "n6",
          "name": "Node 06",
          "x": 8,
          "y": 18,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "cavew",
          "name": "West cave passage",
          "x": 6,
          "y": 24,
          "w": 8,
          "h": 4,
          "type": "cave"
        },
        {
          "id": "caves",
          "name": "Old cave pocket",
          "x": 6,
          "y": 28,
          "w": 8,
          "h": 8,
          "type": "cave"
        },
        {
          "id": "cavelink",
          "name": "South cave bypass",
          "x": 14,
          "y": 34,
          "w": 6,
          "h": 4,
          "type": "cave"
        },
        {
          "id": "fissure",
          "name": "North fissure",
          "x": 26,
          "y": 6,
          "w": 13,
          "h": 4,
          "type": "cave"
        },
        {
          "id": "cavern",
          "name": "Surveyed cavern",
          "x": 48,
          "y": 24,
          "w": 8,
          "h": 7,
          "type": "cave"
        }
      ],
      "doors": [
        {
          "id": "stair_stairlanding",
          "a": "stair",
          "b": "stairlanding",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_north",
          "a": "stairlanding",
          "b": "north",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "north_west",
          "a": "north",
          "b": "west",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "north_east",
          "a": "north",
          "b": "east",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "east_south",
          "a": "east",
          "b": "south",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "west_freight",
          "a": "west",
          "b": "freight",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "freight_spine",
          "a": "freight",
          "b": "spine",
          "width": 2.4,
          "offset": 0.7083333333333334
        },
        {
          "id": "spine_south",
          "a": "spine",
          "b": "south",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "spine_plant",
          "a": "spine",
          "b": "plant",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "plant_exciter",
          "a": "plant",
          "b": "exciter",
          "width": 2.4,
          "offset": 0.5
        },
        {
          "id": "north_exciter",
          "a": "north",
          "b": "exciter",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "north_n1",
          "a": "north",
          "b": "n1",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "north_n2",
          "a": "north",
          "b": "n2",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "east_n3",
          "a": "east",
          "b": "n3",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "south_n4",
          "a": "south",
          "b": "n4",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "south_n5",
          "a": "south",
          "b": "n5",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "cavelink_n5",
          "a": "cavelink",
          "b": "n5",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "west_n6",
          "a": "west",
          "b": "n6",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "west_cavew",
          "a": "west",
          "b": "cavew",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "cavew_caves",
          "a": "cavew",
          "b": "caves",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "caves_cavelink",
          "a": "caves",
          "b": "cavelink",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "west_cavelink",
          "a": "west",
          "b": "cavelink",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "n1_fissure",
          "a": "n1",
          "b": "fissure",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "fissure_n2",
          "a": "fissure",
          "b": "n2",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "east_cavern",
          "a": "east",
          "b": "cavern",
          "width": 1.5,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair",
        "freight"
      ],
      "note": "Complete maintenance level lowered to -21.40 m, beneath the complete B2 research level. Six stabilization nodes, exciter, service galleries and cave progression retain their V8 plan. Normal rooms remain 4 m clear with a separate 1.5 m service zone and 0.3 m slab. Ordinary electrical distribution is allocated in the existing 56 m² plant, accessible without crossing the exciter. One provisional overhead utility trunk; no equipment or terminals placed.",
      "symbols": [],
      "services": [
        {
          "id": "planned-B3-duct",
          "name": "Plant service trunk",
          "kind": "duct",
          "points": [
            {
              "x": 24,
              "y": 28
            },
            {
              "x": 24,
              "y": 24
            },
            {
              "x": 34,
              "y": 24
            }
          ],
          "width": 0.6,
          "clearHeight": 0.6,
          "z": -17.2,
          "location": "overhead",
          "access": "utility",
          "provisional": true,
          "runtimeTested": false
        }
      ]
    }
  },
  "courtyard": {
    "floor": "L0",
    "x": 18,
    "y": 10,
    "w": 10,
    "h": 10,
    "z": 0,
    "openToSky": true,
    "ground": "permeable grass",
    "source": {
      "floor": "L0",
      "room": "courtyard"
    }
  },
  "verticalConnections": [
    {
      "id": "main-stair",
      "type": "stair",
      "room": "stair",
      "floors": [
        "B3",
        "B2",
        "B1",
        "L0",
        "L1",
        "L2",
        "L3"
      ],
      "footprint": {
        "x": 8,
        "y": 2,
        "w": 4,
        "h": 8
      },
      "standardStair": {
        "risers": 34,
        "riserHeight": 0.17058823529411765,
        "flights": 2,
        "flightWidth": 1.4,
        "landingDepth": 1.4,
        "treadDepth": 0.28
      },
      "B1toB2": {
        "rise": 9.8,
        "intermediateZ": -9.8,
        "intermediateDoor": false,
        "flightGroups": [
          {
            "rise": 4,
            "risers": 24,
            "flights": 2
          },
          {
            "rise": 5.8,
            "risers": 34,
            "flights": 2
          }
        ]
      }
    },
    {
      "id": "freight",
      "type": "lift",
      "room": "freight",
      "floors": [
        "B3",
        "B2",
        "B1",
        "L0",
        "L1",
        "L2",
        "L3"
      ],
      "footprint": {
        "x": 18,
        "y": 26,
        "w": 4,
        "h": 6
      },
      "stops": [
        {
          "floor": "B3",
          "z": -21.4
        },
        {
          "floor": "B2",
          "z": -15.6
        },
        {
          "floor": "B1",
          "z": -9.8
        },
        {
          "floor": "L0",
          "z": 0
        },
        {
          "floor": "L1",
          "z": 5.8
        },
        {
          "floor": "L3",
          "z": 17.4
        }
      ],
      "throughCar": true,
      "doorClearWidth": 2.4,
      "note": "B1 stop aligns with dropped garage floor, not clean B1 lobby. Lift pit / overrun provisional. L2 has no landing access or active lift stop.",
      "throughOnlyFloors": [
        "L2"
      ]
    },
    {
      "id": "artifact-stair",
      "type": "stair",
      "room": "artifactstair",
      "floors": [
        "B1",
        "B2"
      ],
      "footprint": {
        "x": 18,
        "y": 32,
        "w": 8,
        "h": 4
      },
      "upperZ": -9.8,
      "lowerZ": -15.600000000000001,
      "risers": 34,
      "riserHeight": 0.17058823529411765,
      "flights": 2,
      "flightWidth": 1.4,
      "landingDepth": 1.4,
      "treadDepth": 0.28,
      "footprints": {
        "B1": {
          "x": 18,
          "y": 32,
          "w": 8,
          "h": 4
        },
        "B2": {
          "x": 18,
          "y": 32,
          "w": 8,
          "h": 4
        }
      },
      "runAxis": "x",
      "landingEnd": "west",
      "requiredEnvelope": {
        "long": 7.68,
        "short": 3.4
      },
      "nominalEnvelopeOnly": true
    }
  ],
  "designReferences": [
    "Säynätsalo: protected outdoor court and differentiated thresholds",
    "Rostlaube: clustered choices and short loops",
    "Carpenter Center: multiple approaches and interlocking volumes",
    "Yale A&A: sectional hierarchy and overlook"
  ],
  "designSequence": [
    "Service routes reserve 1.5 m clear height × 0.8 m clear width for crouching; pipes stay outside that route. Controller nominal clearance is 1.23 m crouched / 1.80 m standing; runtime traversal is untested.",
    "Normal module: 4.0 m occupied + 1.5 m service + 0.3 m slab = 5.8 m.",
    "Garage: floor -9.80 m; 8 m clear. Clean B1 lobby -5.80 m; 4 m full stair between them.",
    "B2 -15.60 m and B3 -21.40 m keep complete 4 m-clear floors beneath the garage.",
    "Three distinct vertical routes: NW main stair, dedicated artifact stair, freight shaft.",
    "Artifact stair follows the user edit: aligned 8 × 4 m footprint south of freight; east–west flights.",
    "B2 uses one connected research corridor; cleaning is concentrated in B1.",
    "Original uploaded JSON is retained separately; this is a polished derivative.",
    "No furniture or equipment props placed. All optional outline symbols are user-placeable."
  ],
  "splitLevelConnections": [
    {
      "id": "B1-clean-return",
      "room": "transferstair",
      "floor": "B1",
      "lowerZ": -9.8,
      "upperZ": -5.8,
      "rise": 4,
      "risers": 24,
      "riserHeight": 0.16666666666666666,
      "flightWidth": 1.4,
      "landingDepth": 1.4,
      "treadDepth": 0.28,
      "flights": 2,
      "route": [
        "garage",
        "garagewide",
        "wash",
        "gown",
        "transferstair",
        "stairlanding",
        "stair"
      ]
    }
  ],
  "overlooks": [
    {
      "axis": "v",
      "fixed": 18,
      "lo": 7,
      "hi": 10,
      "guardTop": 6.9,
      "levels": [
        "L0",
        "L1"
      ]
    }
  ],
  "approaches": [
    {
      "id": "vehicle-approach",
      "level": "B1",
      "note": "West vehicle opening at dropped garage floor -9.80 m; 5 m clear opening. Hillside / ramp gradient and ground interface remain schematic."
    },
    {
      "id": "pedestrian-entry",
      "level": "L0",
      "note": "V7 east entrance retained. No new west pedestrian entrance."
    }
  ],
  "section": [
    {
      "label": "L3 · Observation deck · radar maintenance",
      "z": 17.4
    },
    {
      "label": "L2 · Partial roof-service landing",
      "z": 11.6
    },
    {
      "label": "L1 · Crew quarters · boarded listening suite",
      "z": 5.8
    },
    {
      "label": "L0 · Main floor · double-height Operations",
      "z": 0
    },
    {
      "label": "B1 · Dropped garage · clean stair return",
      "z": -5.8
    },
    {
      "label": "G · garage / boarded wing / freight stop",
      "z": -9.8
    },
    {
      "label": "B2 · Artifact research · single corridor",
      "z": -15.6
    },
    {
      "label": "B3 · Maintenance · stabilization & old caves",
      "z": -21.4
    }
  ],
  "routeStudy": {
    "cargo": [
      "B1:garage",
      "B1:freight",
      "B2:freight",
      "B2:intake",
      "B2:researchhall",
      "B2:analysis"
    ],
    "cargoStorage": [
      "B2:intake",
      "B2:researchhall",
      "B2:analysis",
      "B2:supporthall",
      "B2:secure"
    ],
    "cargoContainment": [
      "B2:intake",
      "B2:researchhall",
      "B2:artifact",
      "B2:containment"
    ],
    "cleanStaff": [
      "B2:stair",
      "B2:stairlanding",
      "B2:westhall",
      "B2:researchhall",
      "B2:analysis"
    ],
    "garagePersonnel": [
      "B1:garage",
      "B1:artifactstair",
      "B2:artifactstair",
      "B2:westhall",
      "B2:researchhall",
      "B2:analysis"
    ],
    "garageCleanReturn": [
      "B1:garage",
      "B1:garagewide",
      "B1:wash",
      "B1:gown",
      "B1:transferstair",
      "B1:stairlanding",
      "B1:stair"
    ],
    "L0freight": [
      "L0:freight",
      "L0:westhall",
      "L0:stairlanding",
      "L0:stair"
    ],
    "boardedSections": [
      {
        "id": "01",
        "floor": "B1",
        "threshold": "garagewide_signal",
        "clearOpening": 1.5
      },
      {
        "id": "02",
        "floor": "L1",
        "threshold": "eastreturn_tapes",
        "clearOpening": 1.2
      }
    ],
    "medical": [
      "B1:garage",
      "B1:garagewide",
      "B1:wash",
      "B1:gown",
      "B1:transferstair",
      "B1:medical"
    ],
    "medicalNote": "The transfer stair lower landing connects gowning and medical at -9.80 m; no change in elevation on the casualty route."
  },
  "revision": "v12-compact-functional-copy",
  "floorModule": {
    "occupiedClear": 4,
    "serviceClear": 1.5,
    "slab": 0.3,
    "floorToFloor": 5.8,
    "basis": "Active Unity controller verified read-only: 1.80 m standing / 1.23 m crouched floor-relative clearance, 0.60 m diameter. Reserve 1.50 m clear crouched route and 0.80 m clear width; utilities outside. Runtime traversal untested.",
    "note": "Occupied height, usable service-zone clearance and slab allowance are separate. Concept game environment; structure, access and life safety are not engineered."
  },
  "operationsSection": {
    "floor": 0,
    "clearTop": 9.799999999999999,
    "serviceTop": 11.299999999999999,
    "slabTop": 11.6,
    "voidLevel": "L1",
    "note": "No intermediate L1 floor or services across Operations.",
    "source": {
      "floor": "L0",
      "room": "control"
    }
  },
  "sourceBaseline": "Derivative of shipped V11. Open as a separate editable building; existing saves are preserved.",
  "serviceRoute": {
    "clearHeight": 1.5,
    "clearWidth": 0.8,
    "posture": "crouched",
    "standingNominalHeight": 1.8,
    "crouchedNominalHeight": 1.23,
    "capsuleDiameter": 0.6,
    "crouchedNominalHeadroom": 0.27,
    "pipeRule": "Pipes, ducts and cable trays must remain outside the reserved unobstructed 1.5 m high × 0.8 m wide route; allocate utilities alongside it.",
    "runtimeTested": false,
    "source": "Read-only active Unity Character.prefab motor overrides, lines 286/294; DynamicRigidbodyCharacterMotor.cs line 1750. Capsule hover is included in floor-relative clearance."
  },
  "garageSection": {
    "normalB1Datum": -5.8,
    "floor": -9.8,
    "drop": 4,
    "occupiedClear": 8,
    "clearTop": -1.8000000000000007,
    "serviceClear": 1.5,
    "serviceTop": -0.3,
    "slabTop": 0,
    "belowFloor": "B2",
    "belowFloorZ": -15.600000000000001,
    "belowClear": 4,
    "belowServiceClear": 1.5,
    "belowSlab": 0.3,
    "note": "Whole B2 and B3 datums move down to preserve full research and maintenance rooms below the dropped garage. No overlapping basement program."
  },
  "sourceUploadSha256": "6aa4f564af9b4769837b40f3953ac4bee7d59ac6d749f9b8be38be3fea54efac",
  "polishNotes": [
    "Separate compact functional copy; upper floors and hidden-story geometry retained.",
    "B1 ordinary storage occupies part of the former turning/loading allowance. Clean-side medical uses the same garage datum.",
    "B2 chamber/booth access is independent of containment; reference and decode open to support circulation.",
    "Accessible ordinary electrical distribution reuses B3 plant.",
    "Two modest service proposals are provisional overlays, with no validated network or placed equipment."
  ],
  "concealedLevel": {
    "floor": "L2",
    "activeRooms": [
      "stair",
      "stairlanding"
    ],
    "sealedConnection": "stairlanding_plant",
    "material": "concrete",
    "roofAbove": "L3",
    "freightStop": false
  },
  "stairDesign": {
    "clearWidth": 1.4,
    "landingDepth": 1.4,
    "treadDepth": 0.28,
    "targetRiser": 0.17,
    "maxRiser": 0.18,
    "minHeadroom": 2.2,
    "perimeter": 0.2,
    "centerGap": 0.2,
    "waistThickness": 0.2
  }
};
