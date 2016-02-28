using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EvenDifferences
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            // TODO : memory improve with biggest input; 90/100
            string input = Console.ReadLine();
            string[] numbers = input.Split(' ');
            List<decimal> parsedNumbers = new List<decimal>();

            for (int i = 0; i < numbers.Length; i++)
            {
                parsedNumbers.Add(decimal.Parse(numbers[i]));
            }

            Console.WriteLine(FindSum(parsedNumbers.ToArray()));
        }

        private static decimal FindSum(decimal[] numbers)
        {
            List<decimal> differences = new List<decimal>();
            for (int i = 1; i < numbers.Length; i += 0)
            {
                if ((Math.Abs(numbers[i - 1] - numbers[i])) % 2 == 0)
                {
                    differences.Add(Math.Abs(numbers[i] - numbers[i - 1]));
                    if (i + 2 <= numbers.Length)
                    {
                        i += 2;
                    }
                }
                else
                {
                    differences.Add(Math.Abs(numbers[i] - numbers[i - 1]));
                    if (i + 1 <= numbers.Length)
                    {
                        i += 1;
                    }
                }
            }
            decimal result = differences.Where(num => num % 2 == 0).Sum();
            return result;
        }
    }
}