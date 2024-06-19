import { packagesEventBus } from './packages/event-bus';

describe('packagesEventBus', () => {
  it('should work', () => {
    expect(packagesEventBus()).toEqual('packages/event-bus');
  });
});
