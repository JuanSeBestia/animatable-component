export const ANIMATIONS = {
  // ATTENTION SEEKERS
  BOUNCE : 'bounce',
  FLASH  : 'flash',
  JELLO  : 'jello',
  PULSE  : 'pulse',
  ROTATE : 'rotate',
  SHAKE  : 'shake',
  SWING  : 'swing',
  RUBBER_BAND : 'rubberBand',
  TADA   : 'tada',
  WOBBLE : 'wobble',
  HEART_BEAT  : 'heartBeat',

  // BOUNCING ENTRANCES
  BOUNCE_IN : 'bounceIn',
  BOUNCE_IN_UP : 'bounceInUp',
  BOUNCE_IN_DOWN : 'bounceInDown',
  BOUNCE_IN_RIGHT : 'bounceInRight',
  BOUNCE_IN_LEFT : 'bounceInLeft',

  // BOUNCING EXITS
  BOUNCE_OUT : 'bounceOut',
  BOUNCE_OUT_UP : 'bounceOutUp',
  BOUNCE_OUT_DOWN : 'bounceOutDown',
  BOUNCE_OUT_RIGHT : 'bounceOutRight',
  BOUNCE_OUT_LEFT : 'bounceOutLeft'
} as const;

export type AnimationsType = typeof ANIMATIONS[keyof typeof ANIMATIONS]