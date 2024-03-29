import React from 'react';
import renderer from 'react-test-renderer';

import CreateImageInstance from '../Image';

describe('Image', () => {
  describe('should call drawImage properly', () => {
    describe('using imageElement', () => {
      it('with style object and imageElement as props', () => {
        const imageElement = new Image();
        imageElement.src = 'source-to-image';

        const style = {
          position: 'absolute',
          left: 10,
          top: 100,
          width: 300,
          height: 120,
        };
        const props = {style, imageElement: imageElement};
        const apeContext = {
          ctx: {
            drawImage: jest.fn(),
          },
        };

        const createImage = CreateImageInstance(props);
        createImage.render(apeContext);

        const {drawImage} = apeContext.ctx;

        expect(drawImage.mock.calls.length).toBe(1);
        expect(drawImage.mock.instances.length).toBe(1);
        expect(drawImage).toBeCalledWith(imageElement, 10, 100, 300, 120);
      });

      it('without style object and width, height, imageElement as props', () => {
        const imageElement = new Image();
        imageElement.src =
          'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';

        const props = {imageElement, width: 100, height: 320};
        const apeContext = {
          ctx: {
            drawImage: jest.fn(),
          },
        };

        const createImage = CreateImageInstance(props);
        createImage.render(apeContext);

        const {drawImage} = apeContext.ctx;

        expect(drawImage.mock.calls.length).toBe(1);
        expect(drawImage.mock.instances.length).toBe(1);
        expect(drawImage).toBeCalledWith(imageElement, 0, 0, 100, 320);
      });

      it('without style object and imageElement as props', () => {
        const imageElement = new Image();
        imageElement.src =
          'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';

        const props = {imageElement};
        const apeContext = {
          ctx: {
            drawImage: jest.fn(),
          },
        };

        const createImage = CreateImageInstance(props);
        createImage.render(apeContext);

        const {drawImage} = apeContext.ctx;

        expect(drawImage.mock.calls.length).toBe(1);
        expect(drawImage.mock.instances.length).toBe(1);
        expect(drawImage).toBeCalledWith(imageElement, 0, 0, 0, 0);
      });
    });
    // describe('using src', () => {
    // it('without style object and src as props', () => {
    //   const imageElement = new Image();
    //   imageElement.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
    //   const props = {src: imageElement, width: 100, height: 320};
    //   const apeContext = {
    //     ctx: {
    //       drawImage: jest.fn()
    //     },
    //   };
    //   CreateImageInstance(props, apeContext);
    //   const { drawImage } = apeContext.ctx;
    //   expect(drawImage.mock.calls.length).toBe(1);
    //   expect(drawImage.mock.instances.length).toBe(1);
    //   expect(drawImage).toBeCalledWith(imageElement, 0, 0, 100, 320);
    // });
    // });
  });
});
