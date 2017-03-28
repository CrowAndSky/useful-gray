var isPageGrayscale = false,
    currentGrayscale = 0,
    currentContrast = 1,
    requestAnimationLoopIndex,
    requestAnimationID,
    animationLoopLength = 100,
    animationLoopIncrement = 1 / animationLoopLength,
    animationLoopContrastIncrement = 2 * animationLoopIncrement,
    desaturateEntirePage = function() {
      if ( requestAnimationLoopIndex > animationLoopLength ) {
        cancelAnimationFrame( requestAnimationID );
      } else {
        currentGrayscale = currentGrayscale + animationLoopIncrement;
        if ( requestAnimationLoopIndex < animationLoopLength / 2 ) {
          currentContrast = currentContrast + animationLoopContrastIncrement;
        } else {
          currentContrast = currentContrast - animationLoopContrastIncrement;
        }
        desaturateTargets.css( "filter", "grayscale(" + currentGrayscale + ") contrast(" + currentContrast + ")" );
        requestAnimationLoopIndex++;
        requestAnimationID = requestAnimationFrame( desaturateEntirePage );
      }
    };

// $( 'body' ).click(function(){
//   requestAnimationLoopIndex = 1;

//   if ( isPageGrayscale ) {
//     isPageGrayscale = false;
//     animationLoopIncrement = -1 / animationLoopLength;
//   } else {
//     isPageGrayscale = true;
//     animationLoopIncrement = 1 / animationLoopLength;
//   }
//   requestAnimationID = requestAnimationFrame( desaturateEntirePage );
// });