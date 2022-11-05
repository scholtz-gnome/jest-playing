import { MyModule } from './index';

describe('Module', () => {
  it('is defined', () => {
    expect(new MyModule().property).toEqual('property');
  });

  describe('#greet', () => {
    it('returns greeting', () => {
      expect(new MyModule().greet()).toEqual('Hello, there!');
    });
  });
});
