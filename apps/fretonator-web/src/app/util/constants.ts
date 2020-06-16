import { ChordType, Mode } from './types';

export const NoteToStringAndFretMap = {
  c__: [
    { string: 'E', fret: 6 },
    { string: 'E', fret: 18 },
    { string: 'A', fret: 1 },
    { string: 'A', fret: 13 },
    { string: 'D', fret: 8 },
    { string: 'D', fret: 20 },
    { string: 'G', fret: 3 },
    { string: 'G', fret: 15 },
    { string: 'B', fret: 11 },
    { string: 'B', fret: 23 }
  ],
  c_: [
    { string: 'E', fret: 7 },
    { string: 'E', fret: 19 },
    { string: 'A', fret: 2 },
    { string: 'A', fret: 14 },
    { string: 'D', fret: 9 },
    { string: 'D', fret: 21 },
    { string: 'G', fret: 4 },
    { string: 'G', fret: 16 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
    { string: 'B', fret: 24 }
  ],
  c: [
    { string: 'E', fret: 8 },
    { string: 'E', fret: 20 },
    { string: 'A', fret: 3 },
    { string: 'A', fret: 15 },
    { string: 'D', fret: 10 },
    { string: 'D', fret: 22 },
    { string: 'G', fret: 5 },
    { string: 'G', fret: 17 },
    { string: 'B', fret: 1 },
    { string: 'B', fret: 13 }
  ],
  'c#': [
    { string: 'E', fret: 9 },
    { string: 'E', fret: 21 },
    { string: 'A', fret: 4 },
    { string: 'A', fret: 16 },
    { string: 'D', fret: 11 },
    { string: 'D', fret: 23 },
    { string: 'G', fret: 6 },
    { string: 'G', fret: 18 },
    { string: 'B', fret: 2 },
    { string: 'B', fret: 14 }
  ],
  'c##': [
    { string: 'E', fret: 10 },
    { string: 'E', fret: 22 },
    { string: 'A', fret: 5 },
    { string: 'A', fret: 17 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'D', fret: 12 },
    { string: 'D', fret: 24 },
    { string: 'G', fret: 7 },
    { string: 'G', fret: 19 },
    { string: 'B', fret: 3 },
    { string: 'B', fret: 15 }
  ],
  d__: [
    { string: 'E', fret: 8 },
    { string: 'E', fret: 20 },
    { string: 'A', fret: 3 },
    { string: 'A', fret: 15 },
    { string: 'D', fret: 10 },
    { string: 'D', fret: 22 },
    { string: 'G', fret: 5 },
    { string: 'G', fret: 17 },
    { string: 'B', fret: 1 },
    { string: 'B', fret: 13 }
  ],
  d_: [
    { string: 'E', fret: 9 },
    { string: 'E', fret: 21 },
    { string: 'A', fret: 4 },
    { string: 'A', fret: 16 },
    { string: 'D', fret: 11 },
    { string: 'D', fret: 23 },
    { string: 'G', fret: 6 },
    { string: 'G', fret: 18 },
    { string: 'B', fret: 2 },
    { string: 'B', fret: 14 }
  ],
  d: [
    { string: 'E', fret: 10 },
    { string: 'E', fret: 22 },
    { string: 'A', fret: 5 },
    { string: 'A', fret: 17 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'D', fret: 24 },
    { string: 'G', fret: 7 },
    { string: 'G', fret: 19 },
    { string: 'B', fret: 3 },
    { string: 'B', fret: 15 },
  ],
  'd#': [
    { string: 'E', fret: 11 },
    { string: 'E', fret: 23 },
    { string: 'A', fret: 6 },
    { string: 'A', fret: 18 },
    { string: 'D', fret: 1 },
    { string: 'D', fret: 13 },
    { string: 'G', fret: 8 },
    { string: 'G', fret: 20 },
    { string: 'B', fret: 4 },
    { string: 'B', fret: 16 }
  ],
  'd##': [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'E', fret: 24 },
    { string: 'A', fret: 7 },
    { string: 'A', fret: 19 },
    { string: 'D', fret: 2 },
    { string: 'D', fret: 14 },
    { string: 'G', fret: 9 },
    { string: 'G', fret: 21 },
    { string: 'B', fret: 5 },
    { string: 'B', fret: 17 }
  ],
  e__: [
    { string: 'E', fret: 10 },
    { string: 'E', fret: 22 },
    { string: 'A', fret: 5 },
    { string: 'A', fret: 17 },
    { string: 'D', fret: 0 },
    { string: 'D', fret: 12 },
    { string: 'D', fret: 24 },
    { string: 'G', fret: 7 },
    { string: 'G', fret: 19 },
    { string: 'B', fret: 3 },
    { string: 'B', fret: 15 },
  ],
  e_: [
    { string: 'E', fret: 11 },
    { string: 'E', fret: 23 },
    { string: 'A', fret: 6 },
    { string: 'A', fret: 18 },
    { string: 'D', fret: 1 },
    { string: 'D', fret: 13 },
    { string: 'G', fret: 8 },
    { string: 'G', fret: 20 },
    { string: 'B', fret: 4 },
    { string: 'B', fret: 16 },
  ],
  e: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'E', fret: 24 },
    { string: 'A', fret: 7 },
    { string: 'A', fret: 19 },
    { string: 'D', fret: 2 },
    { string: 'D', fret: 14 },
    { string: 'G', fret: 9 },
    { string: 'G', fret: 21 },
    { string: 'B', fret: 5 },
    { string: 'B', fret: 17 }
  ],
  'e#': [
    { string: 'E', fret: 1 },
    { string: 'E', fret: 13 },
    { string: 'A', fret: 8 },
    { string: 'A', fret: 20 },
    { string: 'D', fret: 3 },
    { string: 'D', fret: 15 },
    { string: 'G', fret: 10 },
    { string: 'G', fret: 22 },
    { string: 'B', fret: 6 },
    { string: 'B', fret: 18 },
  ],
  'e##': [
    { string: 'E', fret: 2 },
    { string: 'E', fret: 14 },
    { string: 'A', fret: 9 },
    { string: 'A', fret: 21 },
    { string: 'D', fret: 4 },
    { string: 'D', fret: 16 },
    { string: 'G', fret: 11 },
    { string: 'G', fret: 23 },
    { string: 'B', fret: 7 },
    { string: 'B', fret: 19 },
  ],
  f__: [
    { string: 'E', fret: 11 },
    { string: 'E', fret: 23 },
    { string: 'A', fret: 6 },
    { string: 'A', fret: 18 },
    { string: 'D', fret: 1 },
    { string: 'D', fret: 13 },
    { string: 'G', fret: 8 },
    { string: 'G', fret: 20 },
    { string: 'B', fret: 4 },
    { string: 'B', fret: 16 },
  ],
  f_: [
    { string: 'E', fret: 0 },
    { string: 'E', fret: 12 },
    { string: 'E', fret: 24 },
    { string: 'A', fret: 7 },
    { string: 'A', fret: 19 },
    { string: 'D', fret: 2 },
    { string: 'D', fret: 14 },
    { string: 'G', fret: 9 },
    { string: 'G', fret: 21 },
    { string: 'B', fret: 5 },
    { string: 'B', fret: 17 }
  ],
  f: [
    { string: 'E', fret: 1 },
    { string: 'E', fret: 13 },
    { string: 'A', fret: 8 },
    { string: 'A', fret: 20 },
    { string: 'D', fret: 3 },
    { string: 'D', fret: 15 },
    { string: 'G', fret: 10 },
    { string: 'G', fret: 22 },
    { string: 'B', fret: 6 },
    { string: 'B', fret: 18 }
  ],
  'f#': [
    { string: 'E', fret: 2 },
    { string: 'E', fret: 14 },
    { string: 'A', fret: 9 },
    { string: 'A', fret: 21 },
    { string: 'D', fret: 4 },
    { string: 'D', fret: 16 },
    { string: 'G', fret: 11 },
    { string: 'G', fret: 23 },
    { string: 'B', fret: 7 },
    { string: 'B', fret: 19 }
  ],
  'f##': [
    { string: 'E', fret: 3 },
    { string: 'E', fret: 15 },
    { string: 'A', fret: 10 },
    { string: 'A', fret: 22 },
    { string: 'D', fret: 5 },
    { string: 'D', fret: 17 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'G', fret: 24 },
    { string: 'B', fret: 8 },
    { string: 'B', fret: 20 }
  ],
  g__: [
    { string: 'E', fret: 1 },
    { string: 'E', fret: 13 },
    { string: 'A', fret: 8 },
    { string: 'A', fret: 20 },
    { string: 'D', fret: 3 },
    { string: 'D', fret: 15 },
    { string: 'G', fret: 10 },
    { string: 'G', fret: 22 },
    { string: 'B', fret: 6 },
    { string: 'B', fret: 18 }
  ],
  g_: [
    { string: 'E', fret: 2 },
    { string: 'E', fret: 14 },
    { string: 'A', fret: 9 },
    { string: 'A', fret: 21 },
    { string: 'D', fret: 4 },
    { string: 'D', fret: 16 },
    { string: 'G', fret: 11 },
    { string: 'G', fret: 23 },
    { string: 'B', fret: 7 },
    { string: 'B', fret: 19 },
  ],
  g: [
    { string: 'E', fret: 3 },
    { string: 'E', fret: 15 },
    { string: 'A', fret: 10 },
    { string: 'A', fret: 22 },
    { string: 'D', fret: 5 },
    { string: 'D', fret: 17 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'G', fret: 24 },
    { string: 'B', fret: 8 },
    { string: 'B', fret: 20 },
  ],
  'g#': [
    { string: 'E', fret: 4 },
    { string: 'E', fret: 16 },
    { string: 'A', fret: 11 },
    { string: 'A', fret: 23 },
    { string: 'D', fret: 6 },
    { string: 'D', fret: 18 },
    { string: 'G', fret: 1 },
    { string: 'G', fret: 13 },
    { string: 'B', fret: 9 },
    { string: 'B', fret: 21 }
  ],
  'g##': [
    { string: 'E', fret: 4 },
    { string: 'E', fret: 16 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'A', fret: 24 },
    { string: 'D', fret: 7 },
    { string: 'D', fret: 19 },
    { string: 'G', fret: 2 },
    { string: 'G', fret: 14 },
    { string: 'B', fret: 10 },
    { string: 'B', fret: 22 }
  ],
  a__: [
    { string: 'E', fret: 3 },
    { string: 'E', fret: 15 },
    { string: 'A', fret: 10 },
    { string: 'A', fret: 22 },
    { string: 'D', fret: 5 },
    { string: 'D', fret: 17 },
    { string: 'G', fret: 0 },
    { string: 'G', fret: 12 },
    { string: 'G', fret: 24 },
    { string: 'B', fret: 8 },
    { string: 'B', fret: 20 }
  ],
  a_: [
    { string: 'E', fret: 4 },
    { string: 'E', fret: 16 },
    { string: 'A', fret: 11 },
    { string: 'A', fret: 23 },
    { string: 'D', fret: 6 },
    { string: 'D', fret: 18 },
    { string: 'G', fret: 1 },
    { string: 'G', fret: 13 },
    { string: 'B', fret: 9 },
    { string: 'B', fret: 21 }
  ],
  a: [
    { string: 'E', fret: 5 },
    { string: 'E', fret: 17 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'A', fret: 24 },
    { string: 'D', fret: 7 },
    { string: 'D', fret: 19 },
    { string: 'G', fret: 2 },
    { string: 'G', fret: 14 },
    { string: 'B', fret: 10 },
    { string: 'B', fret: 22 }
  ],
  'a#': [
    { string: 'E', fret: 6 },
    { string: 'E', fret: 18 },
    { string: 'A', fret: 1 },
    { string: 'A', fret: 13 },
    { string: 'D', fret: 8 },
    { string: 'D', fret: 20 },
    { string: 'G', fret: 3 },
    { string: 'G', fret: 15 },
    { string: 'B', fret: 11 },
    { string: 'B', fret: 23 }
  ],
  'a##': [
    { string: 'E', fret: 7 },
    { string: 'E', fret: 19 },
    { string: 'A', fret: 2 },
    { string: 'A', fret: 14 },
    { string: 'D', fret: 9 },
    { string: 'D', fret: 21 },
    { string: 'G', fret: 4 },
    { string: 'G', fret: 16 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
    { string: 'B', fret: 24 }
  ],
  b__: [
    { string: 'E', fret: 5 },
    { string: 'E', fret: 17 },
    { string: 'A', fret: 0 },
    { string: 'A', fret: 12 },
    { string: 'A', fret: 24 },
    { string: 'D', fret: 7 },
    { string: 'D', fret: 19 },
    { string: 'G', fret: 2 },
    { string: 'G', fret: 14 },
    { string: 'B', fret: 10 },
    { string: 'B', fret: 22 }
  ],
  b_: [
    { string: 'E', fret: 6 },
    { string: 'E', fret: 18 },
    { string: 'A', fret: 1 },
    { string: 'A', fret: 13 },
    { string: 'D', fret: 8 },
    { string: 'D', fret: 20 },
    { string: 'G', fret: 3 },
    { string: 'G', fret: 15 },
    { string: 'B', fret: 11 },
    { string: 'B', fret: 23 }
  ],
  b: [
    { string: 'E', fret: 7 },
    { string: 'E', fret: 19 },
    { string: 'A', fret: 2 },
    { string: 'A', fret: 14 },
    { string: 'D', fret: 9 },
    { string: 'D', fret: 21 },
    { string: 'G', fret: 4 },
    { string: 'G', fret: 16 },
    { string: 'B', fret: 0 },
    { string: 'B', fret: 12 },
    { string: 'B', fret: 24 }
  ],
  'b#': [
    { string: 'E', fret: 8 },
    { string: 'E', fret: 20 },
    { string: 'A', fret: 3 },
    { string: 'A', fret: 15 },
    { string: 'D', fret: 10 },
    { string: 'D', fret: 22 },
    { string: 'G', fret: 5 },
    { string: 'G', fret: 17 },
    { string: 'B', fret: 1 },
    { string: 'B', fret: 13 }
  ],
  'b##': [
    { string: 'E', fret: 9 },
    { string: 'E', fret: 21 },
    { string: 'A', fret: 4 },
    { string: 'A', fret: 16 },
    { string: 'D', fret: 11 },
    { string: 'D', fret: 23 },
    { string: 'G', fret: 6 },
    { string: 'G', fret: 18 },
    { string: 'B', fret: 2 },
    { string: 'B', fret: 14 }
  ]
};

export const ModePatterns = {
  ionian: [2, 2, 1, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  aolian: [2, 1, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
  phrygianDominant: [1, 3, 1, 2, 1, 2, 2],
  majorPentatonic: [2, 2, 4, 2, 4],
  minorPentatonic: [4, 2, 2, 4, 2]
};

export const ChordPatterns = {
  ionian: [
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished
  ],
  dorian: [
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major
  ],
  phrygian: [
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor
  ],
  lydian: [
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor
  ],
  mixolydian: [
    ChordType.major,
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major
  ],
  aolian: [
    ChordType.minor,
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major
  ],
  locrian: [
    ChordType.diminished,
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor
  ],
  harmonicMinor: [
    ChordType.minor,
    ChordType.diminished,
    ChordType.augmented,
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.diminished
  ],
  phrygianDominant: [
    ChordType.major,
    ChordType.major,
    ChordType.diminished,
    ChordType.minor,
    ChordType.diminished,
    ChordType.augmented,
    ChordType.minor
  ],
  majorPentatonic: [
    ChordType.major,
    ChordType.minor,
    ChordType.minor,
    ChordType.major,
    ChordType.minor
  ],
  minorPentatonic: [
    ChordType.minor,
    ChordType.major,
    ChordType.major,
    ChordType.minor,
    ChordType.major
  ]
};

export const Octave = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export const ScaleDegrees = [
  'tonic',
  'supertonic',
  'mediant',
  'subdominant',
  'dominant',
  'submediant',
  'leadingTone'
];

export const ModeSelectorObjects = [
  {
    name: Mode.ionian,
    displayName: 'Ionian (Major)'
  },
  {
    name: Mode.dorian,
    displayName: 'Dorian'
  },
  {
    name: Mode.phrygian,
    displayName: 'Phrygian'
  },
  {
    name: Mode.lydian,
    displayName: 'Lydian'
  },
  {
    name: Mode.mixolydian,
    displayName: 'Mixolydian'
  },
  {
    name: Mode.aolian,
    displayName: 'Aolian (Minor)'
  },
  {
    name: Mode.locrian,
    displayName: 'Locrian'
  },
  {
    name: Mode.harmonicMinor,
    displayName: 'Harmonic Minor'
  },
  {
    name: Mode.phrygianDominant,
    displayName: 'Phrygian Dominant'
  },
  {
    name: Mode.majorPentatonic,
    displayName: 'Major Pentatonic'
  },
  {
    name: Mode.minorPentatonic,
    displayName: 'Minor Pentatonic'
  }
];

export const Enharmonics = [
  ['C#', 'D♭'],
  ['D#', 'E♭'],
  ['F#', 'G♭'],
  ['G#', 'A♭'],
  ['A#', 'B♭']
];

export const StringFrequencies = {
  'e': 329.63,
  'B': 246.94,
  'G': 196.00,
  'D': 146.83,
  'A': 110.00,
  'E': 82.41
}

export const SimilarModePatterns = [
  Mode.ionian,
  Mode.dorian,
  Mode.phrygian,
  Mode.lydian,
  Mode.mixolydian,
  Mode.aolian,
  Mode.locrian,
  Mode.ionian,
  Mode.dorian,
  Mode.phrygian,
  Mode.lydian,
  Mode.mixolydian,
  Mode.aolian,
  Mode.locrian
]
