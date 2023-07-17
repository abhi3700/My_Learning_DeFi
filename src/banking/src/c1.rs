//! --------------------------------------------------------------------------------------------
//! Challenge-1: Compound Interest
//! --------------------------------------------------------------------------------------------
//!
//! Question: A bank offers 2% interest compounded annually.
//! If a customer deposits $5000, how much will they have in their account after 3 years?
//!
//! Manual:
//! 1 year : 5000 + 5000 * 0.02 -> 5100
//! 2 year: 5100 + 5100 * 0.02 -> 5202
//! 3 year: 5202 + 5202 * 0.02 -> 5306.04
//!
//! The formula for compound interest is A = P (1 + r/n)^(nt), where:
//! A is the amount of money accumulated after n years, including interest.
//! P is the principal amount (the initial amount of money).
//! r is the annual interest rate (in decimal form, so 2% becomes 0.02).
//! n is the number of times that interest is compounded per year.
//! t is the number of years the money is invested for.
//! In this case, the bank offers 2% interest compounded annually. So, r = 0.02, n = 1 (since it's compounded annually), and t = 3 years. The customer deposits $5000, so P = $5000.
//! Substituting these values into the formula, we get:
//! A = 5000 * (1 + 0.02/1)^(1*3)
//! A = 5000 * (1 + 0.02)^3
//! A = 5000 * (1.02)^3
//! A = 5000 * 1.061208
//! A = $5306.04
//! So, the customer will have $5306.04 in their account after 3 years.

use num_traits::pow;
use std::ops::Mul;

/// Get compound interest amount
fn get_ci_amt(p: u32, r: f32, n: u8, t: u8) -> f32 {
    p as f32 * pow(1 as f32 + r / n as f32, t.mul(n).into())
}

pub(crate) fn main() {
    let p = 5000;
    let r = 0.02;
    let n = 1;
    let t = 3;
    let a = get_ci_amt(p, r, n, t);
    // The line `println!("The compound interest amount is ${:.2}", a);` is printing the compound
    // interest amount calculated in the previous step. The `{:.2}` is a formatting specifier that
    // specifies that the value of `a` should be printed with 2 decimal places. The `a` is the variable
    // holding the compound interest amount.
    println!("The compound interest amount is ${:.2}", a);
}
