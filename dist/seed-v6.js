window.KERN_V6 = {
  "version": 1,
  "variant": "v6",
  "title": "KERN bent arrival & separate stairs",
  "units": "metres",
  "geometryVersion": 3,
  "floors": {
    "L0": {
      "name": "Compact court & operations",
      "z": 0,
      "elevation": "0.00 m",
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 4,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "freight",
          "name": "Freight lift",
          "x": 32,
          "y": 22,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
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
          "height": 8.1,
          "zones": [
            {
              "name": "Control desks",
              "x": 20,
              "y": 3
            },
            {
              "name": "Radar / radio",
              "x": 28,
              "y": 3
            },
            {
              "name": "Map / planning",
              "x": 21,
              "y": 7
            },
            {
              "name": "Shift support",
              "x": 28,
              "y": 7
            }
          ]
        },
        {
          "id": "archive",
          "name": "Archive / reading",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 10,
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
          "h": 8,
          "type": "circulation"
        },
        {
          "id": "westelbow",
          "name": "West turn",
          "x": 14,
          "y": 18,
          "w": 4,
          "h": 5,
          "type": "circulation",
          "diagramLabel": ""
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
          "y": 16,
          "w": 4,
          "h": 6,
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
          "h": 6,
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
          "name": "Equipment issue / staging",
          "x": 6,
          "y": 23,
          "w": 12,
          "h": 8,
          "type": "service"
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
          "id": "cleanlanding",
          "name": "Clean landing",
          "x": 18,
          "y": 23,
          "w": 6,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "deconclean",
          "name": "Clean transfer stair",
          "x": 18,
          "y": 26,
          "w": 6,
          "h": 4,
          "type": "core",
          "locked": true
        },
        {
          "id": "survey",
          "name": "Survey / field store",
          "x": 36,
          "y": 22,
          "w": 8,
          "h": 8,
          "type": "service",
          "outsideOnly": true
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
          "id": "westhall_westelbow",
          "a": "westhall",
          "b": "westelbow",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "westelbow_courtleg",
          "a": "westelbow",
          "b": "courtleg",
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
          "id": "courtleg_cleanlanding",
          "a": "courtleg",
          "b": "cleanlanding",
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
          "id": "westelbow_archive",
          "a": "westelbow",
          "b": "archive",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westelbow_wc",
          "a": "westelbow",
          "b": "wc",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westelbow_issue",
          "a": "westelbow",
          "b": "issue",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "issue_cleanlanding",
          "a": "issue",
          "b": "cleanlanding",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "cleanlanding_deconclean",
          "a": "cleanlanding",
          "b": "deconclean",
          "width": 1.2,
          "offset": 1
        },
        {
          "id": "eastleg_freight",
          "a": "eastleg",
          "b": "freight",
          "width": 2,
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
          "id": "archive_stair",
          "a": "archive",
          "b": "stair",
          "width": 1.2,
          "offset": 0.5
        }
      ],
      "entrances": [
        "entry",
        "survey"
      ],
      "note": "The east entrance immediately bends south and west. Freight is near arrival; Operations can only be reached around the south and west sides of the courtyard, with multiple turns. Reception has no Operations door. The separate northwest main stair is reached through Archive / reading. There is no west-side pedestrian entrance.",
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
      ]
    },
    "L1": {
      "name": "Small crew quarters & overlook",
      "z": 4.2,
      "elevation": "+4.20 m",
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 4,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "freight",
          "name": "Freight lift",
          "x": 32,
          "y": 22,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "sky",
          "name": "COURTYARD / OPEN TO SKY",
          "x": 18,
          "y": 10,
          "w": 10,
          "h": 10,
          "type": "void",
          "locked": true,
          "courtyardVoid": true
        },
        {
          "id": "void",
          "name": "OPEN TO OPERATIONS",
          "x": 18,
          "y": 0,
          "w": 14,
          "h": 10,
          "type": "void",
          "locked": true
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
          "name": "Quiet hall",
          "x": 14,
          "y": 10,
          "w": 4,
          "h": 16,
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
          "id": "common",
          "name": "Kitchen / common",
          "x": 18,
          "y": 23,
          "w": 10,
          "h": 7,
          "type": "living"
        },
        {
          "id": "bath",
          "name": "Showers / WC",
          "x": 18,
          "y": 20,
          "w": 6,
          "h": 3,
          "type": "service"
        },
        {
          "id": "landing",
          "name": "Upper landing",
          "x": 28,
          "y": 28,
          "w": 8,
          "h": 2,
          "type": "circulation"
        },
        {
          "id": "terrace",
          "name": "Roof terrace",
          "x": 36,
          "y": 22,
          "w": 8,
          "h": 8,
          "type": "terrace",
          "outdoor": true
        },
        {
          "id": "stairlanding",
          "name": "Northwest stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 2,
          "type": "circulation"
        }
      ],
      "doors": [
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
          "id": "westhall_common",
          "a": "westhall",
          "b": "common",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "westhall_bath",
          "a": "westhall",
          "b": "bath",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "common_bath",
          "a": "common",
          "b": "bath",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "common_landing",
          "a": "common",
          "b": "landing",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "landing_freight",
          "a": "landing",
          "b": "freight",
          "width": 1.8,
          "offset": 0.5
        },
        {
          "id": "landing_terrace",
          "a": "landing",
          "b": "terrace",
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
          "id": "stairlanding_stair",
          "a": "stairlanding",
          "b": "stair",
          "width": 1.2,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair"
      ],
      "note": "The main stair arrives in the northwest quiet wing. Bedrooms and the Operations overlook branch from the west hall; one kitchen / common room leads to the southeast freight landing and terrace. The main stair and freight shaft are separate, vertically aligned cores."
    },
    "B1": {
      "name": "Research & lower expedition bay",
      "z": -4.5,
      "elevation": "-4.50 m",
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 4,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "freight",
          "name": "Freight lift",
          "x": 32,
          "y": 22,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "garage",
          "name": "Garage / expedition bay",
          "x": 6,
          "y": 23,
          "w": 12,
          "h": 12,
          "type": "service",
          "z": -5.7,
          "height": 4.2
        },
        {
          "id": "workshop",
          "name": "Workshop / stores",
          "x": 6,
          "y": 15,
          "w": 12,
          "h": 8,
          "type": "service",
          "z": -5.7,
          "height": 4.2
        },
        {
          "id": "dirty",
          "name": "Dirty gear / undress",
          "x": 12,
          "y": 35,
          "w": 6,
          "h": 3,
          "type": "service",
          "z": -5.7
        },
        {
          "id": "wash",
          "name": "Decon wash",
          "x": 18,
          "y": 35,
          "w": 6,
          "h": 3,
          "type": "service",
          "z": -5.7
        },
        {
          "id": "splitrise",
          "name": "RISE 1.20 m / 8 steps",
          "x": 18,
          "y": 30,
          "w": 6,
          "h": 5,
          "type": "core",
          "z": -5.7,
          "height": 4.2,
          "locked": true,
          "stairTransition": "garage-rise"
        },
        {
          "id": "deconclean",
          "name": "Clean transfer stair",
          "x": 18,
          "y": 26,
          "w": 6,
          "h": 4,
          "type": "core",
          "locked": true
        },
        {
          "id": "dispatch",
          "name": "Clean equipment transfer",
          "x": 24,
          "y": 28,
          "w": 12,
          "h": 4,
          "type": "service"
        },
        {
          "id": "decode",
          "name": "Decode / server lab",
          "x": 24,
          "y": 14,
          "w": 8,
          "h": 8,
          "type": "tech"
        },
        {
          "id": "plant",
          "name": "Plant / maintenance",
          "x": 24,
          "y": 8,
          "w": 8,
          "h": 6,
          "type": "service"
        },
        {
          "id": "secure",
          "name": "Research link",
          "x": 32,
          "y": 14,
          "w": 4,
          "h": 8,
          "type": "circulation"
        },
        {
          "id": "intake",
          "name": "Artifact intake / scanner",
          "x": 36,
          "y": 14,
          "w": 10,
          "h": 10,
          "type": "tech"
        },
        {
          "id": "artifact",
          "name": "Artifact store",
          "x": 32,
          "y": 8,
          "w": 8,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "containment",
          "name": "Containment",
          "x": 40,
          "y": 8,
          "w": 6,
          "h": 6,
          "type": "tech"
        },
        {
          "id": "test",
          "name": "Test / observation",
          "x": 36,
          "y": 24,
          "w": 10,
          "h": 8,
          "type": "tech"
        },
        {
          "id": "stairlanding",
          "name": "Main stair landing",
          "x": 8,
          "y": 10,
          "w": 6,
          "h": 3,
          "type": "circulation"
        },
        {
          "id": "northreturn",
          "name": "Research return",
          "x": 14,
          "y": 10,
          "w": 10,
          "h": 4,
          "type": "circulation"
        },
        {
          "id": "northelbow",
          "name": "",
          "x": 18,
          "y": 14,
          "w": 6,
          "h": 4,
          "type": "circulation",
          "diagramLabel": ""
        }
      ],
      "doors": [
        {
          "id": "freight_dispatch",
          "a": "freight",
          "b": "dispatch",
          "width": 2,
          "offset": 0.5
        },
        {
          "id": "dispatch_deconclean",
          "a": "dispatch",
          "b": "deconclean",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "dispatch_test",
          "a": "dispatch",
          "b": "test",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "decode_plant",
          "a": "decode",
          "b": "plant",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "decode_secure",
          "a": "decode",
          "b": "secure",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "secure_freight",
          "a": "secure",
          "b": "freight",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "secure_intake",
          "a": "secure",
          "b": "intake",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "secure_artifact",
          "a": "secure",
          "b": "artifact",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "intake_artifact",
          "a": "intake",
          "b": "artifact",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "intake_containment",
          "a": "intake",
          "b": "containment",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "intake_test",
          "a": "intake",
          "b": "test",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "garage_workshop",
          "a": "garage",
          "b": "workshop",
          "width": 2,
          "offset": 0.5
        },
        {
          "id": "garage_dirty",
          "a": "garage",
          "b": "dirty",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "dirty_wash",
          "a": "dirty",
          "b": "wash",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "wash_splitrise",
          "a": "wash",
          "b": "splitrise",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "splitrise_deconclean",
          "a": "splitrise",
          "b": "deconclean",
          "width": 1.2,
          "offset": 1
        },
        {
          "id": "stairlanding_stair",
          "a": "stairlanding",
          "b": "stair",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_northreturn",
          "a": "stairlanding",
          "b": "northreturn",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "northreturn_northelbow",
          "a": "northreturn",
          "b": "northelbow",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "northelbow_decode",
          "a": "northelbow",
          "b": "decode",
          "width": 1.5,
          "offset": 0.5
        }
      ],
      "entrances": [
        "stair",
        "garage"
      ],
      "note": "The northwest main stair reaches Decode through a continuous bent research approach. The southeast freight shaft remains next to clean equipment transfer. Garage / workshop / dirty rooms remain at −5.70 m; eight 0.15 m risers lead to the clean landing at −4.50 m, then the separate clean transfer stair returns to L0.",
      "externals": [
        {
          "room": "garage",
          "side": "w",
          "width": 5,
          "label": "LOWER VEHICLE APPROACH"
        }
      ]
    },
    "B2": {
      "name": "Stabilization & cave routes",
      "elevation": "−9.00 m",
      "note": "The northwest main stair enters the west stabilization gallery; freight still enters from the southeast service link. Cave routes and all six stabilization nodes are retained. Only volumes below the lower garage/decon bay use reduced clear height.",
      "rooms": [
        {
          "id": "stair",
          "name": "Main stair",
          "x": 8,
          "y": 4,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "freight",
          "name": "Freight lift",
          "x": 32,
          "y": 22,
          "w": 4,
          "h": 6,
          "type": "core",
          "locked": true
        },
        {
          "id": "spine",
          "name": "Core access",
          "x": 32,
          "y": 28,
          "w": 4,
          "h": 3,
          "type": "circulation",
          "locked": false
        },
        {
          "id": "south",
          "name": "South service gallery",
          "x": 20,
          "y": 31,
          "w": 28,
          "h": 3,
          "type": "circulation",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "east",
          "name": "East service gallery",
          "x": 45,
          "y": 15,
          "w": 3,
          "h": 16,
          "type": "circulation",
          "locked": false
        },
        {
          "id": "north",
          "name": "North service gallery",
          "x": 20,
          "y": 12,
          "w": 28,
          "h": 3,
          "type": "circulation",
          "locked": false
        },
        {
          "id": "west",
          "name": "West service gallery",
          "x": 17,
          "y": 12,
          "w": 3,
          "h": 22,
          "type": "circulation",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "exciter",
          "name": "Central exciter",
          "x": 28,
          "y": 15,
          "w": 8,
          "h": 7,
          "type": "tech",
          "locked": false
        },
        {
          "id": "n1",
          "name": "Node 01",
          "x": 20,
          "y": 6,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false
        },
        {
          "id": "n2",
          "name": "Node 02",
          "x": 39,
          "y": 6,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false
        },
        {
          "id": "n3",
          "name": "Node 03",
          "x": 48,
          "y": 18,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false
        },
        {
          "id": "n4",
          "name": "Node 04",
          "x": 39,
          "y": 34,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false
        },
        {
          "id": "n5",
          "name": "Node 05",
          "x": 20,
          "y": 34,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "n6",
          "name": "Node 06",
          "x": 11,
          "y": 18,
          "w": 6,
          "h": 6,
          "type": "tech",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "cavew",
          "name": "West cave passage",
          "x": 6,
          "y": 24,
          "w": 11,
          "h": 4,
          "type": "cave",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "caves",
          "name": "Southwest pocket",
          "x": 6,
          "y": 28,
          "w": 6,
          "h": 8,
          "type": "cave",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "cavelink",
          "name": "South cave bypass",
          "x": 12,
          "y": 34,
          "w": 8,
          "h": 4,
          "type": "cave",
          "locked": false,
          "height": 2.7
        },
        {
          "id": "fissure",
          "name": "North fissure",
          "x": 26,
          "y": 6,
          "w": 13,
          "h": 4,
          "type": "cave",
          "locked": false
        },
        {
          "id": "hidden",
          "name": "Sealed cavern",
          "x": 48,
          "y": 24,
          "w": 8,
          "h": 7,
          "type": "cave",
          "locked": false
        },
        {
          "id": "stairlanding",
          "name": "Main stair return",
          "x": 8,
          "y": 10,
          "w": 9,
          "h": 5,
          "type": "circulation"
        }
      ],
      "doors": [
        {
          "id": "freight_spine",
          "a": "freight",
          "b": "spine",
          "width": 2,
          "offset": 0.5
        },
        {
          "id": "spine_south",
          "a": "spine",
          "b": "south",
          "width": 1.8,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "south_east",
          "a": "south",
          "b": "east",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "east_north",
          "a": "east",
          "b": "north",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "north_west",
          "a": "north",
          "b": "west",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "west_south",
          "a": "west",
          "b": "south",
          "width": 1.2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "exciter_north",
          "a": "exciter",
          "b": "north",
          "width": 2,
          "offset": 0.5
        },
        {
          "id": "n1_north",
          "a": "n1",
          "b": "north",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "n2_north",
          "a": "n2",
          "b": "north",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "n3_east",
          "a": "n3",
          "b": "east",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "n4_south",
          "a": "n4",
          "b": "south",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "n5_south",
          "a": "n5",
          "b": "south",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "n6_west",
          "a": "n6",
          "b": "west",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "cavew_west",
          "a": "cavew",
          "b": "west",
          "width": 1.5,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "cavew_caves",
          "a": "cavew",
          "b": "caves",
          "width": 2,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "caves_cavelink",
          "a": "caves",
          "b": "cavelink",
          "width": 1.5,
          "offset": 0.5,
          "kind": "open"
        },
        {
          "id": "cavelink_n5",
          "a": "cavelink",
          "b": "n5",
          "width": 1.5,
          "offset": 0.5
        },
        {
          "id": "fissure_n1",
          "a": "fissure",
          "b": "n1",
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
          "id": "hidden_east",
          "a": "hidden",
          "b": "east",
          "width": 1.2,
          "offset": 0.5,
          "sealed": true
        },
        {
          "id": "stairlanding_stair",
          "a": "stairlanding",
          "b": "stair",
          "width": 1.2,
          "offset": 0.5
        },
        {
          "id": "stairlanding_west",
          "a": "stairlanding",
          "b": "west",
          "width": 1,
          "offset": 0.5,
          "kind": "open"
        }
      ],
      "entrances": [
        "stair"
      ],
      "annotations": [
        {
          "x": 22,
          "y": 24,
          "text": "UNEXCAVATED ROCK"
        },
        {
          "x": 38,
          "y": 24,
          "text": "ROCK / SERVICE DUCTS"
        }
      ],
      "z": -9
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
    "ground": "permeable grass"
  },
  "verticalConnections": [
    {
      "id": "main-stair",
      "type": "stair",
      "room": "stair",
      "floors": [
        "B2",
        "B1",
        "L0",
        "L1"
      ],
      "footprint": {
        "x": 8,
        "y": 4,
        "w": 4,
        "h": 6
      }
    },
    {
      "id": "freight",
      "type": "lift",
      "room": "freight",
      "floors": [
        "B2",
        "B1",
        "L0",
        "L1"
      ],
      "footprint": {
        "x": 32,
        "y": 22,
        "w": 4,
        "h": 6
      }
    },
    {
      "id": "clean-stair",
      "type": "stair",
      "room": "deconclean",
      "floors": [
        "B1",
        "L0"
      ],
      "footprint": {
        "x": 18,
        "y": 26,
        "w": 6,
        "h": 4
      }
    }
  ],
  "designReferences": [
    "Säynätsalo: protected outdoor court and differentiated thresholds",
    "Rostlaube: clustered choices and short loops",
    "Carpenter Center: multiple approaches and interlocking volumes",
    "Yale A&A: sectional hierarchy and overlook"
  ],
  "designSequence": [
    "East entry → open south turn → open west elbow → arrival return → nearby freight",
    "Arrival return → core junction → south court passage → west turn → west hall → north return → Operations",
    "West hall → Archive / reading → separate northwest main stair",
    "Lower garage → dirty gear → wash → eight-step rise → clean equipment transfer → southeast freight"
  ],
  "splitLevelConnections": [
    {
      "id": "garage-rise",
      "level": "B1",
      "room": "splitrise",
      "from": "wash",
      "to": "deconclean",
      "z0": -5.7,
      "z1": -4.5,
      "rise": 1.2,
      "footprint": {
        "x": 18,
        "y": 30,
        "w": 6,
        "h": 5
      },
      "stair": {
        "type": "straight",
        "orientation": "north-south",
        "upDirection": "north",
        "risers": 8,
        "riserHeight": 0.15,
        "treadDepth": 0.3,
        "flightWidth": 1.5,
        "flightCenterX": 23.05,
        "landingWidth": 6,
        "landingDepth": 1.2,
        "run": 2.1
      }
    }
  ],
  "overlooks": [
    {
      "axis": "v",
      "fixed": 18,
      "lo": 7,
      "hi": 10,
      "levels": [
        "L0",
        "L1"
      ],
      "guardTop": 5.3
    }
  ],
  "approaches": [
    {
      "id": "vehicle-ramp",
      "level": "B1",
      "type": "vehicle",
      "width": 5,
      "start": [
        -29,
        29,
        0
      ],
      "end": [
        6,
        29,
        -5.7
      ],
      "note": "35 m separate west approach; 5.7 m descent. Gameplay slope, not vehicle-code certification."
    }
  ],
  "section": [
    {
      "label": "L1 · quarters / overlook",
      "z": 4.2
    },
    {
      "label": "L0 · courtyard / operations",
      "z": 0
    },
    {
      "label": "B1 · research / clean transfer",
      "z": -4.5
    },
    {
      "label": "B1 · garage / dirty side",
      "z": -5.7
    },
    {
      "label": "B2 · stabilization / caves",
      "z": -9
    }
  ],
  "routeStudy": {
    "entryToFreight": [
      "entry",
      "entryleg",
      "entryelbow",
      "eastleg",
      "freight"
    ],
    "entryToOperations": [
      "entry",
      "entryleg",
      "entryelbow",
      "eastleg",
      "corelink",
      "courtleg",
      "westelbow",
      "westhall",
      "northlink",
      "control"
    ],
    "entryToMainStair": [
      "entry",
      "entryleg",
      "entryelbow",
      "eastleg",
      "corelink",
      "courtleg",
      "westelbow",
      "archive",
      "stair"
    ],
    "notes": [
      "No reception-to-Operations connection",
      "Operations has only its west doorway",
      "No pedestrian external door on the west face",
      "Main stair and freight centers are 30 m apart"
    ],
    "sampleRoutes": [
      {
        "id": "freight",
        "destination": "Freight door",
        "length": 20.5,
        "points": [
          [
            44,
            11.5
          ],
          [
            42,
            11.5
          ],
          [
            42,
            17
          ],
          [
            34,
            17
          ],
          [
            34,
            22
          ]
        ]
      },
      {
        "id": "operations",
        "destination": "Operations west door",
        "length": 53,
        "points": [
          [
            44,
            11.5
          ],
          [
            42,
            11.5
          ],
          [
            42,
            17
          ],
          [
            30,
            17
          ],
          [
            30,
            21.5
          ],
          [
            16,
            21.5
          ],
          [
            16,
            8.5
          ],
          [
            18,
            8.5
          ]
        ]
      },
      {
        "id": "main-stair",
        "destination": "Main stair south door",
        "length": 55.5,
        "points": [
          [
            44,
            11.5
          ],
          [
            42,
            11.5
          ],
          [
            42,
            17
          ],
          [
            30,
            17
          ],
          [
            30,
            21.5
          ],
          [
            16,
            21.5
          ],
          [
            16,
            19
          ],
          [
            14,
            19
          ],
          [
            10,
            19
          ],
          [
            10,
            10
          ]
        ]
      }
    ],
    "measurement": "Indicative safe orthogonal centerline walks from the main east threshold to the destination threshold; not shortest-distance optimization."
  }
};