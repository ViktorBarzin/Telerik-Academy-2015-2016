using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaddyKopper
{
    using System.Numerics;
    class Program
    {
        public static int numberOfTransformations = 0;

        static void Main(string[] args)
        {
            // TODO : passes all examples but 50pts only?
            BigInteger number = BigInteger.Parse(Console.ReadLine());
            SaddyCopperOperation(number);
        }

        private static void SaddyCopperOperation(BigInteger number)
        {
            if (number.ToString().Length == 1 || numberOfTransformations == 10)
            {
                if (numberOfTransformations < 10)
                {
                    Console.WriteLine(numberOfTransformations);
                }

                Console.WriteLine(number);
                return;
            }
            numberOfTransformations++;

            List<int> listOfsums = new List<int>();
            while (number > 10)
            {
                number /= 10;
                List<int> digitsAtEvenPositions = new List<int>();
                for (int i = 0; i < number.ToString().Length; i += 2)
                {
                    digitsAtEvenPositions.Add(number.ToString()[i] - '0');
                }

                listOfsums.Add(digitsAtEvenPositions.Sum());
            }
            long product = 1;
            foreach (var num in listOfsums)
            {
                product *= num;
            }
            //Console.WriteLine(product);
            //--------------------------------
            SaddyCopperOperation(product);
        }
    }
}
