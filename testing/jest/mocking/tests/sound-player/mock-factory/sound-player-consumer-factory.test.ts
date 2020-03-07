import SoundPlayerConsumer from '../../../src/sound-player/sound-player-consumer';
import SoundPlayer from '../../../src/sound-player/sound-player';
import 'jest';

const mockPlaySoundFile = jest.fn();
jest.mock('../../../src/sound-player/sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: () => {}};
  });
});
const mockSoundPlayer = <jest.Mock<SoundPlayer>>SoundPlayer;

describe('Sound Player Test', () => {
  beforeEach(() => {
    mockSoundPlayer.mockClear;    
    mockPlaySoundFile.mockClear();
  });

  it('The consumer should be able to call new() on SoundPlayer', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();

    // Ensure constructor created the object:
    expect(soundPlayerConsumer).toBeTruthy();
  });

  it('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();

    //expect(SoundPlayer).toHaveBeenCalledTimes(1);
    expect(mockSoundPlayer.mock.calls.length).toEqual(1)
  });

  // it('We can check if the consumer called a method on the class instance', () => {
  //   const soundPlayerConsumer = new SoundPlayerConsumer();
  //   const coolSoundFileName = 'song.mp3';
  //   soundPlayerConsumer.playSomethingCool();
    
  //   console.log("mockPlaySoundFile:", mockPlaySoundFile);
  //   //expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // });  
})
