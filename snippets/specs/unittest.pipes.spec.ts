import {ByYearPipe} from "./product.pipes";

describe("Pipes test ", function(){
    it("pipes test", function() {
        
        let byYearPipe = new ByYearPipe();

        expect(byYearPipe.transform()).toBeUndefined();

         expect(byYearPipe.transform(
             [
                 {
                     year: 2010
                 }
             ]
         )).toEqual([{
             year: 2010
         }])


         expect(byYearPipe.transform(
             [
                 {
                     year: 2010
                 },

                 {
                     year: 2011
                 }
             ], 2011
         )).toEqual([{
             year: 2011
         }])
 
        
    })
})