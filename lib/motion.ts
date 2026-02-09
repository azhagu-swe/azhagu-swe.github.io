/**
 * Luxury Motion System
 * Physics-based animations for high-end, minimalist portfolio
 * 
 * Design Philosophy: "Weighted Inertia" - fast start, silky deceleration
 */

import { Variants, Transition } from "framer-motion"

// ============================================================================
// 1. THE PHYSICS OF LUXURY - Bezier Curves
// ============================================================================

/**
 * Luxury Easing Functions
 * These mimic real-world physics with weighted inertia:
 * - Fast initial acceleration (responds immediately)
 * - Smooth, extended deceleration (feels expensive)
 */
export const LUXURY_EASING = {
    // Primary: Weighted inertia - the signature "expensive" feel
    weighted: [0.22, 1, 0.36, 1] as const,

    // Smooth: For subtle UI transitions
    smooth: [0.25, 0.1, 0.25, 1] as const,

    // Swift: Quick actions that need to feel responsive
    swift: [0.32, 0.72, 0, 1] as const,

    // Elegant: Longer transitions for reveals
    elegant: [0.16, 1, 0.3, 1] as const,

    // Soft: Gentle micro-interactions
    soft: [0.4, 0, 0.2, 1] as const,
}

/**
 * Duration Tokens
 * Consistent timing across the application
 */
export const DURATION = {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    deliberate: 0.7,
    dramatic: 1.0,
}

/**
 * Pre-configured Transitions
 * Ready-to-use transition objects for Framer Motion
 */
export const TRANSITION = {
    // Standard weighted transition
    weighted: {
        duration: DURATION.normal,
        ease: LUXURY_EASING.weighted,
    } as Transition,

    // Quick micro-interaction
    micro: {
        duration: DURATION.fast,
        ease: LUXURY_EASING.soft,
    } as Transition,

    // Dramatic reveal
    reveal: {
        duration: DURATION.slow,
        ease: LUXURY_EASING.elegant,
    } as Transition,

    // Swift response
    swift: {
        duration: DURATION.fast,
        ease: LUXURY_EASING.swift,
    } as Transition,
}

// ============================================================================
// 2. STAGGERED REVEAL SYSTEM
// ============================================================================

/**
 * Container Variants for Staggered Children
 * Parent orchestrates the reveal sequence
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
}

/**
 * Card Reveal - Background First Strategy
 * 1. Card background fades in
 * 2. Content slides up with delay
 */
export const cardReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: DURATION.normal,
            ease: LUXURY_EASING.weighted,
        },
    },
}

/**
 * Text Reveal - Delayed after container
 */
export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.fast,
            ease: LUXURY_EASING.smooth,
            delay: 0.05, // 50ms after background
        },
    },
}

/**
 * Hierarchical Stagger - Different delays for different elements
 */
export const hierarchyReveal = {
    heading: {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: DURATION.normal, ease: LUXURY_EASING.weighted },
        },
    },
    subheading: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: DURATION.fast, ease: LUXURY_EASING.soft, delay: 0.1 },
        },
    },
    content: {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: DURATION.normal, ease: LUXURY_EASING.elegant, delay: 0.15 },
        },
    },
    cta: {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: DURATION.fast, ease: LUXURY_EASING.swift, delay: 0.25 },
        },
    },
}

// ============================================================================
// 3. VISUAL HOOKS - Processing Animations
// ============================================================================

/**
 * Processing Pulse - Subtle glow for "thinking" state
 * Perfect for API calls and backend processing
 */
export const processingPulse: Variants = {
    idle: {
        boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)",
    },
    processing: {
        boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 20px 10px rgba(34, 197, 94, 0.1)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
        ],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: LUXURY_EASING.soft,
        },
    },
}

/**
 * High-Speed Line - Progress indicator that signals computation
 */
export const speedLine: Variants = {
    idle: { scaleX: 0, opacity: 0 },
    processing: {
        scaleX: [0, 1],
        opacity: [1, 0],
        transition: {
            duration: 0.8,
            repeat: Infinity,
            ease: LUXURY_EASING.swift,
        },
    },
}

/**
 * Data Flow Animation - For showing backend logic
 */
export const dataFlow: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: DURATION.slow, ease: LUXURY_EASING.elegant },
            opacity: { duration: DURATION.fast },
        },
    },
}

// ============================================================================
// 4. GHOST HOVER EFFECT
// ============================================================================

/**
 * Ghost Hover - Scale + Opacity "Lean In" Effect
 * Creates psychological affordance of responsiveness
 */
export const ghostHover = {
    initial: {
        scale: 1,
        opacity: 1,
    },
    hover: {
        scale: 1.02,
        opacity: 0.95,
        transition: {
            duration: DURATION.fast,
            ease: LUXURY_EASING.swift,
        },
    },
    tap: {
        scale: 0.98,
        opacity: 0.9,
        transition: {
            duration: DURATION.instant,
            ease: LUXURY_EASING.soft,
        },
    },
}

/**
 * CTA Lean-In - More pronounced for primary actions
 */
export const ctaLeanIn = {
    initial: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.03,
        y: -2,
        transition: {
            duration: DURATION.fast,
            ease: LUXURY_EASING.weighted,
        },
    },
    tap: {
        scale: 0.97,
        y: 0,
        transition: {
            duration: DURATION.instant,
            ease: LUXURY_EASING.soft,
        },
    },
}

/**
 * Subtle Glow on Hover
 */
export const glowHover = {
    initial: {
        boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)",
    },
    hover: {
        boxShadow: "0 0 30px 5px rgba(34, 197, 94, 0.15)",
        transition: {
            duration: DURATION.normal,
            ease: LUXURY_EASING.smooth,
        },
    },
}

// ============================================================================
// 5. SKELETON & PROGRESSIVE LOADING
// ============================================================================

/**
 * Skeleton Shimmer - Perceived performance boost
 */
export const skeletonShimmer: Variants = {
    initial: {
        backgroundPosition: "-200% 0",
    },
    animate: {
        backgroundPosition: "200% 0",
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
        },
    },
}

/**
 * Progressive Reveal - Content fades in as it loads
 */
export const progressiveLoad: Variants = {
    loading: {
        opacity: 0.3,
        filter: "blur(4px)",
    },
    loaded: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: DURATION.normal,
            ease: LUXURY_EASING.smooth,
        },
    },
}

/**
 * Instant Feedback - Makes responses feel faster
 */
export const instantFeedback: Variants = {
    idle: { scale: 1 },
    active: {
        scale: [1, 0.98, 1],
        transition: {
            duration: DURATION.fast,
            times: [0, 0.5, 1],
            ease: LUXURY_EASING.soft,
        },
    },
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create stagger delay for array of items
 */
export function getStaggerDelay(index: number, baseDelay = 0.05): number {
    return index * baseDelay
}

/**
 * Generate viewport animation trigger config
 */
export const viewportConfig = {
    once: true,
    margin: "-50px",
    amount: 0.3,
}

// ============================================================================
// CSS KEYFRAMES (for globals.css)
// ============================================================================

/**
 * Add these to your globals.css:
 * 
 * @keyframes luxury-shimmer {
 *   from { background-position: -200% 0; }
 *   to { background-position: 200% 0; }
 * }
 * 
 * @keyframes processing-pulse {
 *   0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
 *   50% { box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0.1); }
 * }
 * 
 * @keyframes speed-line {
 *   0% { transform: scaleX(0); opacity: 1; }
 *   100% { transform: scaleX(1); opacity: 0; }
 * }
 * 
 * .luxury-transition {
 *   transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
 * }
 * 
 * .ghost-hover:hover {
 *   transform: scale(1.02);
 *   opacity: 0.95;
 * }
 * 
 * .skeleton-shimmer {
 *   background: linear-gradient(
 *     90deg,
 *     hsl(var(--muted)) 0%,
 *     hsl(var(--muted-foreground) / 0.1) 50%,
 *     hsl(var(--muted)) 100%
 *   );
 *   background-size: 200% 100%;
 *   animation: luxury-shimmer 1.5s infinite;
 * }
 */
