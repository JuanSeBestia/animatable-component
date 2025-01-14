import {
  h,
  Component,
  ComponentInterface,
  Element,
  Prop,
  Event,
  EventEmitter,
  Method,
  Watch
} from '@stencil/core';

import Animations, {
  AnimationsType,
  ANIMATION_KEY_ERROR
} from '../../animations/animations'

import { EasingType, EASING_FUNCTIONS } from '../../easing/easing'

/**
 * animatable-component
 */
@Component({
  tag: 'animatable-component'
})
export class AnimatableComponent implements ComponentInterface {
  private currentAnimation: Animation

  @Element() el!: HTMLElement

  /**
   * Name of the animation to get the keyFrames
   */
  @Prop() animation?: AnimationsType
  @Watch('animation')
  animationDidChangeHandler(animation: AnimationsType) {
    const keyFrames = Animations[animation];
    if (keyFrames && keyFrames.length) {
      this.keyFrames = keyFrames;
    } else {
      throw new Error(ANIMATION_KEY_ERROR);
    }
  }

  /**
   * Keyframes of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true
  }) keyFrames: Keyframe[]

  /**
   * Keyframes of the animation in string format.
   */
  @Prop() keyFramesData: string

  /**
   * Get keyFrames of the animation from string data.
   * @param text - The string with the keyFrames of the animation.
   */
  @Watch('keyFramesData')
  keyFramesDidChangeHandler(text: string) {
    if (text) this.keyFrames = JSON.parse(text);
  }

  /**
   * Default options of the animation.
   */
  @Prop({
    mutable: true,
    reflect: true
  }) options: KeyframeAnimationOptions
  @Watch('options')
  optionsDidChangeHandler(options: KeyframeAnimationOptions) {
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        if (key === 'id')
          this.animateId = undefined
        else
          this[key] = undefined
      }
    }
  }

  /**
   * Default options of the animation in string format.
   */
  @Prop() optionsData: string
  /**
   * Get options of the animation from string data.
   * @param text - The string with the options of the animation.
   */
  @Watch('optionsData')
  optionsDataDidChangeHandler(text: string) {
    if (text) this.options = JSON.parse(text);
  }
  /**
   * A DOMString with which to reference the animation.
   */
  @Prop({ mutable: true }) animateId: string
  /**
   * The number of milliseconds to delay the start of the animation.
   * Defaults to 0.
   */
  @Prop({ mutable: true }) delay?: number
  /**
   * The number of milliseconds to delay after the end of an animation.
   */
  @Prop({ mutable: true }) endDelay?: number
  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   * Defaults to 0.
   */
  @Prop({ mutable: true }) duration?: number
  /**
   * Direction of the animation.
   */
  @Prop({ mutable: true }) direction: PlaybackDirection
  /**
   * Determines how values are combined between this animation and other,
   * separate animations that do not specify their own specific composite operation.
   * Defaults to `replace`.
   */
  @Prop({ mutable: true }) composite?: CompositeOperation
  /**
   * The rate of the animation's change over time.
   */
  @Prop({ mutable: true }) easing?: string
  /**
   * Dictates whether the animation's effects should be reflected
   * by the element(s) prior to playing ("backwards"), retained after the animation
   * has completed playing ("forwards"), or both. Defaults to "none".
   */
  @Prop({ mutable: true }) fill?: FillMode
  /**
   * The number of times the animation should repeat.
   * Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
   */
  @Prop({ mutable: true }) iterations?: number
  /**
   * Describes at what point in the iteration the animation should start.
   */
  @Prop({ mutable: true }) iterationStart?: number
  /**
   * Determines how values build from iteration to iteration in this animation.
   */
  @Prop({ mutable: true }) iterationComposite?: IterationCompositeOperation
  /**
   * Start the animation when the component is mounted.
   */
  @Prop() autoPlay = true

  /**
   * Sets the current time value of the animation in milliseconds, whether running or paused.
   */
  @Prop() currentTime?: number;
  @Watch('currentTime')
  setCurrenTime(newValue: number) {
    if (this.currentAnimation) this.currentAnimation.currentTime = newValue
  }
  /**
   * Returns the current time value of the animation in milliseconds, whether running or paused.
   */
  @Method()
  async getCurrentTime(): Promise<number> {
    return this.currentAnimation.currentTime;
  }

  /**
   * Sets the scheduled time when an animation's playback should begin.
   */
  @Prop() startTime?: number;
  @Watch('startTime')
  setStartTime(newValue: number) {
    if (this.currentAnimation) this.currentAnimation.startTime = newValue
  }
  /**
   * Returns the scheduled time when an animation's playback should begin.
   */
  @Method()
  async getStartTime(): Promise<number> {
    return this.currentAnimation.startTime;
  }

  /**
   * Indicates whether the animation is currently waiting
   * for an asynchronous operation such as initiating playback
   * or pausing a running animation.
   */
  @Method()
  async getPending(): Promise<boolean> {
    return this.currentAnimation.pending;
  }

  /**
   * Sets the playback rate of the animation.
   */
  @Prop() playbackRate?: number;
  @Watch('playbackRate')
  setPlaybackRate(newValue: number) {
    if (this.currentAnimation) this.currentAnimation.playbackRate = newValue
  }
  /**
   * Returns the playback rate of the animation.
   */
  @Method()
  async getPlaybackRate(): Promise<number> {
    return this.currentAnimation.playbackRate;
  }

  /**
   * Returns an enumerated value describing the playback state of an animation.
   */
  @Method()
  async getPlayState(): Promise<AnimationPlayState> {
    return this.currentAnimation.playState;
  }

  /**
   * This event is sent when the animation finishes playing.
   */
  @Event({
    eventName: 'finish'
  }) onfinish!: EventEmitter<HTMLElement>
  /**
   * This event is sent when the animation is cancelled.
   */
  @Event({
    eventName: 'cancel'
  }) oncancel!: EventEmitter<HTMLElement>

  /**
   * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
   */
  @Method()
  async cancel(): Promise<void> {
    return this.currentAnimation.cancel()
  }

  /**
   * Sets the current playback time to the end of the animation
   * corresponding to the current playback direction.
   */
  @Method()
  async finish(): Promise<void> {
    return this.currentAnimation.finish()
  }

  /**
   * Suspends playback of the animation.
   */
  @Method()
  async pause(): Promise<void> {
    return this.currentAnimation.pause()
  }

  /**
   * Starts or resumes playing of an animation.
   */
  @Method()
  async play(): Promise<void> {
    return this.currentAnimation.play()
  }

  /**
   * Reverses the playback direction, meaning the animation ends at its beginning.
   */
  @Method()
  async reverse(): Promise<void> {
    return this.currentAnimation.reverse()
  }

  private getAnimationOptions(): KeyframeAnimationOptions {
    const animationOptions: KeyframeAnimationOptions = this.options
      || (this.optionsData && JSON.parse(this.optionsData))
      || {};
    if (this.delay !== undefined) animationOptions.delay = this.delay;
    if (this.duration !== undefined) animationOptions.duration = this.duration;
    if (this.direction) animationOptions.direction = this.direction;
    if (this.composite) animationOptions.composite = this.composite;
    if (this.easing) {
      const defaultEasing = this.easing as EasingType
      animationOptions.easing = EASING_FUNCTIONS[defaultEasing] || this.easing
    }
    if (this.endDelay !== undefined) animationOptions.endDelay = this.endDelay;
    if (this.fill) animationOptions.fill = this.fill;
    if (this.animateId !== undefined) animationOptions.id = this.animateId;
    if (this.iterations !== undefined) animationOptions.iterations = this.iterations;
    if (this.iterationStart !== undefined) animationOptions.iterationStart = this.iterationStart;
    if (this.iterationComposite) animationOptions.iterationComposite = this.iterationComposite;

    return animationOptions;
  }

  private createAnimation(): Animation {
    const element = (this.el.firstElementChild
      || (this.el.children.length && this.el.children[0])
      || this.el) as HTMLElement;
    const options = this.getAnimationOptions();
    const keyFrames = this.keyFrames
      || (this.animation && Animations[this.animation])
      || (this.keyFramesData && JSON.parse(this.keyFramesData))
      || [];
    const animation = element.animate(keyFrames, options);
    animation.onfinish = () => this.onfinish.emit(element);
    animation.oncancel = () => this.oncancel.emit(element);
    if (this.currentTime !== undefined) animation.currentTime = this.currentTime;
    if (this.startTime !== undefined) animation.startTime = this.startTime;
    
    return animation;
  }

  componentWillLoad() {
    this.currentAnimation = this.createAnimation()
    if (this.autoPlay) this.play()
  }

  componentDidUpdate() {
    this.currentAnimation = this.createAnimation()
    if (this.autoPlay) this.play()
  }

  render() {
    return <slot />
  }
}